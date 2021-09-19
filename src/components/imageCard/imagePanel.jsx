import React from 'react';
import ImageCard from './index';
import { Row, Col } from 'antd';

const ImagePanel = (props) => {
  const {
    data,
    api,
    setLikedStatus,
  } = props;

  return (
    <Row gutter={8}>
      <Col xl={24} lg={24} sm={24} xs={24}>
        <div style={{ display: 'inline-block', float: 'left' }}>
          <p style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'left', marginBottom: 0}}>Spacestagram</p>
          <p style={{ fontSize: '18px', color: 'rgb(138, 135, 135)', textAlign: 'left'}}>{`Brought to you by NASA's ${api} API`}</p>
        </div>
      </Col>
      {data && data.map((o) => (
        <Col xl={24} lg={24} sm={24} xs={24}>
          <ImageCard data={o} setLikedStatus={setLikedStatus}/>
        </Col>
      ))}
    </Row>
  );
};

export default ImagePanel;
