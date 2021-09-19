import React, {useEffect, useState} from 'react';
import ImageCard from './index';
import { Row, Col } from 'antd';

const ImagePanel = (props) => {
  const {
    data,
    api
  } = props;
  const [curData, setCurData] = useState(data);

  useEffect(() => {
    if (!localStorage.getItem('liked-list')) localStorage.setItem('liked-list', JSON.stringify([]));
    let likedList = JSON.parse(localStorage.getItem('liked-list'));
    data.forEach((o) => {
      if (likedList.indexOf(o.title) !== -1) {
        o['liked'] = true;
      }
      else o['liked'] = false;
    })
    setCurData(data);
  }, [])

  return (
    <Row gutter={8}>
        <Col xl={24} lg={24} sm={24} xs={24}>
            <p style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'left', marginBottom: 0}}>Spacestagram</p>
            <p style={{ fontSize: '18px', color: 'rgb(138, 135, 135)', textAlign: 'left'}}>{`Brought to you by NASA's ${api} API`}</p>
        </Col>
        {curData && curData.map((o) => (
            <Col xl={24} lg={24} sm={24} xs={24}>
                <ImageCard data={o}/>
            </Col>
        ))}
    </Row>
  );
};

export default ImagePanel;
