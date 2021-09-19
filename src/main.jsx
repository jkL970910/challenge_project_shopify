import React, {Component} from 'react';
import { Row, Col, Button, Select, message, Popover } from 'antd';
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
            likedListInfo: undefined,
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
        let url = NASA_REQUEST_URL;
        const {select_api, timeRange} = this.state;
        if (select_api === 'APOD') {
            type = '/planetary/apod?api_key=';
            url = url + type + NASAKEY + `&start_date=${timeRange.time[0].format('YYYY-MM-DD')}&end_date=${timeRange.time[1].format('YYYY-MM-DD')}`;
        } else {
            message.error('more links will release soon');
            return;
        }
        this.setState({isLoading: true, initial: false})
        axios.get(url).then((res) => {
            this.setState({info: this.updateDataList(res.data), likedListInfo: JSON.parse(localStorage.getItem('liked-list')), isLoading: false, error: res.status === 200 || res.status === 304 ? false : true})
        }).catch(res => {
            this.setState({info: res.response.data, isLoading: false, error: res.response.status === 200 || res.response.status === 304 ? false : true})
        })
    }

    updateDataList = (data) => {
        if (!localStorage.getItem('liked-list')) localStorage.setItem('liked-list', JSON.stringify(new Set()));
        let likedList = this.objToSet(JSON.parse(localStorage.getItem('liked-list')));
        data.forEach((o) => {
          if (likedList.has(o.title)) {
            o['liked'] = true;
          }
          else o['liked'] = false;
        })
        return data; 
    }

    objToSet = (obj) => {
        let set = new Set();
        for (let key in obj) {
          set.add(obj[key]);
        }
        return set;
    }

    setLikedStatus = (data) => {
        const {title, liked} = data;
        let localArr = this.objToSet(JSON.parse(localStorage.getItem('liked-list')));
        if (!liked) localArr.add(title);
        else localArr.delete(title);
        localStorage.setItem('liked-list', JSON.stringify({...[...localArr]}));
        this.setState({info: this.updateDataList(this.state.info), likedListInfo: JSON.parse(localStorage.getItem('liked-list'))})
        message.success(`You have ${!liked ? 'liked' : 'unliked'} the ${title}`);
    }

    onSourceChange = (value) => {
        this.setState({ select_api: value });
    }

    onTimeRangeChange = (o) => {
        this.setState((prevState) => ({ timeRange: {...prevState.timeRange, ...o} }));
    };

    render() {
        const { select_api, initial, isLoading, info, error, likedListInfo } = this.state;
        const content = (
            <div>
                {likedListInfo && Object.keys(likedListInfo).map((o) => (
                    <p className={'liked-panel'}>{likedListInfo[o]}</p>
                ))}
            </div>
        );
        return (
            <Row gutter={8} className='main'>
                <Col span={24}>
                    <StyleCard title="Welcome! Please select an image source" headStyle={{ fontSize: '46px'}} >
                        <div style={{ display: 'flex',  justifyContent: 'center', marginBottom: '8px'}}>
                            <Select
                                style={{ width: 300 }}
                                placeholder={`Select a source`}
                                value={select_api}
                                onChange={this.onSourceChange}
                            >
                                <Select.Option value="APOD">Astronomy Picture of the Day</Select.Option>
                                <Select.Option value="NeoWs">More Links Will Coming Soon</Select.Option>
                            </Select>
                            <DateRange onTimeRangeChange={this.onTimeRangeChange}/>
                            <Button style = {{ marginLeft: '16px'}} onClick={this.showNasaImages}>Search</Button>
                            {initial || isLoading ? '' :
                                <Popover content={content} title={`You like ${likedListInfo && Object.keys(likedListInfo).length} images`}>
                                    <Button style={{ marginLeft: '16px' }} type="primary">Your Liked List</Button>
                                </Popover>
                            }
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
                            <ImagePanel data={info} api={select_api} setLikedStatus={this.setLikedStatus} />
                        </CorpSuspense>
                        }
                    </StyleCard>
                </Col>
            </Row>
        );
    }
}

export default Main;