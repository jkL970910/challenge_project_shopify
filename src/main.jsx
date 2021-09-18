import React, {Component} from 'react';
import { Row, Col, Button, Select } from 'antd';
import axios from 'axios';
import { NASAKEY, NASA_REQUEST_URL } from './constants';
import StyleCard from './components/card/index';
import CorpSuspense from './components/suspense/index';
import ImagePanel from './components/imageCard/imagePanel';
import DateRange from './components/dataRange/index';
import './main.css';

class Main extends Component {
    constructor() {
        super();
        this.state= {
            select_api: 'APOD',
            info: undefined,
            isLoading: false,
            initial: true,
            error: false,
            timeRange: undefined,
        };
    }

    showNasaImages = () => {
        this.fetchImages();
    }

    refresh = () => {
        this.fetchImages();
    }
 
    fetchImages = () => {
        let type = '';
        const {select_api, timeRange} = this.state;
        if (select_api === 'APOD') type = '/planetary/apod?api_key=';
        else if (select_api === 'EPIC') type = '/EPIC/api/natural/all?api_key=';
        const url = NASA_REQUEST_URL + type + NASAKEY + `&start_date=${timeRange.time[0].format('YYYY-MM-DD')}&end_date=${timeRange.time[1].format('YYYY-MM-DD')}`;
        this.setState({isLoading: true, initial: false})
        axios.get(url).then((res) => {
            this.setState({info: res.data, isLoading: false, error: res.status === 200 || res.status === 304 ? false : true})
        })
    }

    onSourceChange = (value) => {
        this.setState({ select_api: value });
    }

    onTimeRangeChange = (o) => {
        this.setState((prevState) => ({ timeRange: {...prevState.timeRange, ...o} }));
      };

    render() {
        const { select_api, initial, isLoading, info, error } = this.state;
        return (
            <Row gutter={8} className='main'>
                <Col span={24}>
                    <StyleCard title="Welcome! Please select a Image source" headStyle={{ fontSize: '46px'}} >
                        <div style={{ display: 'flex',  justifyContent: 'center', marginBottom: '8px'}}>
                            <Select
                                style={{ width: 300 }}
                                placeholder={`Select a source`}
                                value={select_api}
                                onChange={this.onSourceChange}
                            >
                                <Select.Option value="APOD">Astronomy Picture of the Day</Select.Option>
                                <Select.Option value="EPIC">Earth Polychromatic Imaging Camera</Select.Option>
                            </Select>
                            <DateRange onTimeRangeChange={this.onTimeRangeChange}/>
                            <Button style = {{ marginLeft: '16px'}} onClick={this.showNasaImages}>Search</Button>
                        </div>
                    </StyleCard>
                </Col>
                <Col span={24}>
                    <StyleCard style={{ background: 'rgb(218, 220, 224)' }}>
                        {initial ? <p style={{ fontSize: '24px' }}>Let's start the travel</p>
                        :
                        <CorpSuspense
                            loading={isLoading}
                            error={error}
                            data={info}
                            onRetry={this.refresh}
                        >
                            <ImagePanel data={info} api={select_api} />
                        </CorpSuspense>
                        }
                    </StyleCard>
                </Col>
            </Row>
        );
    }
}

export default Main;