import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Spin, Empty, Button } from 'antd';
import { LoadingOutlined, MehOutlined } from '@ant-design/icons';
import style from './index.less';

const Suspense = (props) => {
  const {
    loading,
    error,
    data,
    onRetry = () => {},
    style: cssStyle = { minHeight: 200 },
    children,
  } = props;
  const antIcon = <LoadingOutlined style={{ fontSize: 25 }} />;
  const isEmptyData = isEmpty(data);
  return (
    <div className={style.suspense} style={cssStyle}>
      <Spin spinning={loading} indicator={antIcon} style={cssStyle}>
        {!(error || loading) && !isEmptyData && children}
        {!(error || loading) && isEmptyData && (
          <div className={style.errorWrap} style={{ ...cssStyle }}>
            <Empty
              image={<MehOutlined style={{ fontSize: 30, color: '#acacac' }} />}
              description="No Data"
              imageStyle={{ height: 40 }}
            />
          </div>
        )}
        {error && (
          <div className={style.errorWrap} style={{ ...cssStyle }}>
            <Empty
              image={<MehOutlined style={{ fontSize: 30, color: '#acacac' }} />}
              description="Fail to get the data"
              imageStyle={{ height: 40 }}
            >
              {
                <Button size="small" type="primary" onClick={onRetry}>
                  Retry
                </Button>
              }
            </Empty>
          </div>
        )}
      </Spin>
    </div>
  );
};

export default Suspense;
