import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

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
      cover={
        <Image
          alt={alt}
          src={src}
          width={220}
          height={220}
          layout='responsive'
          loading='lazy'
        />
      }>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default Photo;
