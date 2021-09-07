import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export interface IPhotoProps {
  alt: string;
  src: string;
  title: string;
  description: string;
  loading: boolean;
}

const Photo = ({ alt, src, title, description, loading }: IPhotoProps) => {
  return (
    <Card
      loading={loading}
      hoverable
      style={{ width: 240, margin: 20 }}
      cover={<img alt={alt} src={src} />}>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default Photo;
