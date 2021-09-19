import React, {useState} from 'react';
import { Card, message } from 'antd';
import './index.css';
import copy from 'copy-to-clipboard';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useEffect } from 'react/cjs/react.development';

const ImageCard = (props) => {
  const {
    data
  } = props;
  const {copyright, date, explanation, url, title, media_type, liked} = data;
  const [curLiked, setCurLiked] = useState(liked);
  
  useEffect(() => {
    setCurLiked(liked);
  }, [data]);

  const setLikedStatus = () => {
    setCurLiked(!curLiked); 
    let localArr = JSON.parse(localStorage.getItem('liked-list'));
    if (!curLiked) localArr.push(title);
    else localArr.splice(localArr.indexOf(title), 1);
    localStorage.setItem('liked-list', JSON.stringify(localArr));
    message.success(`You have ${!curLiked ? 'liked' : 'unliked'} the ${title}`);
  }

  const copyCode = () => {
    if (copy(url, {
      debug: true,
    })) message.success(`The link of ${title} has copied successfully, send it to your friends!`);
  };

  return (
    <div className={"imageCard"}>
      <Card
        hoverable
        style={{ width: '100%', display: 'inline-block', textAlign: 'center', marginBottom: '24px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{ textAlign: 'left' }}>
            {media_type && media_type === 'image' ? <img src={url} /> : ''}
            {media_type && media_type === 'video' ? <iframe src={url} allowfullscreen="true"/> : ''}
          </div>
          <div style={{ textAlign: 'left', flex: 1, margin: '30px' }}>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{title}</p>
            <div>
              <p style={{ fontSize: '24px', display:'inline-block' }}>Date: {date} | {copyright || 'Anonymous'}</p>
              <ShareAltOutlined 
                style={{ float: 'right', fontSize: '32px', marginLeft: '8px' }} 
                onClick={copyCode}
              />
              <HeartOutlined 
                style={{ float: 'right', fontSize: '32px', color: curLiked ? 'red' : ''}} 
                onClick={setLikedStatus}
              />
            </div>
            <p style={{ fontSize: '30px' }}>{explanation}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ImageCard;
