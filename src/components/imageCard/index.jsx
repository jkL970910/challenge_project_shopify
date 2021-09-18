import React, {useState} from 'react';
import { Card, message } from 'antd';
import './index.css';
import copy from 'copy-to-clipboard';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';

const ImageCard = (props) => {
  const {
    data
  } = props;
  const {copyright, date, explanation, url, title, media_type} = data;
  const [liked, setLiked] = useState(false);

  const copyCode = () => {
    if (copy(url, {
      debug: true,
    })) message.success(`The link of ${title} has copied successfully, send it to your friends!`)
  }

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
                style={{ float: 'right', fontSize: '32px', color: liked ? 'red' : ''}} 
                onClick={() => {setLiked(!liked); message.success(`You have ${!liked ? 'liked' : 'unliked'} the ${title}`)}}
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
