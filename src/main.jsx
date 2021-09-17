import React, {Component} from 'react';
import { Row, Col, Card, Button } from 'antd';
import axios from 'axios';
import { NASAKEY, NASA_REQUEST_URL } from './constants';
import './main.css';

class Main extends Component {

    constructor() {
        super();
        this.state= {
            select_api: '',
            info: '',
            isLoading: false,
        };
    }

    showNasaImages = (input) => {
        this.setState({
            select_api: input
        })
        this.fetchImages(input);
    }

    fetchImages = (input) => {
        console.log(input);
        const url = NASA_REQUEST_URL + '/planetary/apod?api_key=' + NASAKEY;
        axios.get(url).then((res) => {
            this.setState({info: res})
        })
    }

    render() {
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <Card>Sum = {`${this.state.info}`}</Card>
                    <Button onClick={this.showNasaImages}>click</Button>
                </Col>
            </Row>
        );
    }
}

export default Main;