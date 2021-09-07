import { Skeleton, Space } from 'antd';
import React from 'react';

export interface ILoaderProps {
}

export function Loader (props: ILoaderProps) {
  return (
    <>
      <Space>
          <Skeleton.Button active={true} size={'default'} shape={'square'}  />
          <Skeleton.Avatar active={true} size={'default'} shape={'square'} />
          <Skeleton.Input style={{ width: 200 }} active={true} size={'default'} />
        </Space>
    </>
  );
}

export default Loader;
