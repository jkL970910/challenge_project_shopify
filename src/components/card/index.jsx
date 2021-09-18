import React from 'react';
import { Card } from 'antd';
import './index.css';

const StyleCard = (props) => {
  const { children, ...restOptions } = props;
  return (
    <>
      <Card className={'common-card-style'} {...restOptions}>
        {children}
      </Card>
    </>
  );
};

export default StyleCard;
