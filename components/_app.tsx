import React, { useState } from 'react';
import { Layout, Typography, Row, PageHeader, Descriptions, Radio } from 'antd';

import {
  useGetPhotosByRoverQuery,
  useGetRoverDataQuery,
} from '../store/services/nasa';
import Navbar from '@Components/navbar';
import Photo from '@Components/photo';
import Loader from '@Components/loader';
import { CAMERAS } from './constants';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [current, setCurrent] = useState('curiosity');
  const [cam, setCam] = useState('FHAZ');
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetPhotosByRoverQuery({
    name: current,
    camera: cam,
    page: page,
  });
  // Hook for Rover extra info
  const rover = useGetRoverDataQuery(current);

  const onCamChange = (e) => {
    setCam(e.target.value);
    setPage(1);
  };

  const setCurrentRover = async (rover: string) => {
    await setPage(1);
    await setCurrent(rover);
  };

  return (
    <Layout>
      <Header>
        <Navbar current={current} setCurrent={setCurrentRover} />
      </Header>
      <Layout>
        <PageHeader
          ghost={true}
          title={current.toUpperCase()}
          subTitle={rover?.data?.photo_manifest?.status}>
          <Descriptions
            size='default'
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
            <Descriptions.Item label='Launch date'>
              {rover?.data?.photo_manifest?.launch_date}
            </Descriptions.Item>
            <Descriptions.Item label='Max sol'>
              {rover?.data?.photo_manifest?.landing_date}
            </Descriptions.Item>
            <Descriptions.Item label='Total photos'>
              {rover?.data?.photo_manifest?.total_photos}
            </Descriptions.Item>
            <Descriptions.Item label='Landing date'>
              {rover?.data?.photo_manifest?.landing_date}
            </Descriptions.Item>
            <Descriptions.Item label='Max date'>
              {rover?.data?.photo_manifest?.max_date}
            </Descriptions.Item>
            <Descriptions.Item label='Camera'>
              <Radio.Group
                onChange={onCamChange}
                defaultValue={CAMERAS[current][0]}>
                {CAMERAS[current].map((item) => {
                  return (
                    <Radio.Button value={item} key={item}>
                      {item}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>

        <Content style={{ minHeight: '90vh' }}>
          {isLoading && <Loader />}
          {error && <Title level={2}>{error}</Title>}

          <div className='site-card-wrapper'>
            {data?.photos.length === 0 && (
              <Title level={2} style={{ textAlign: 'center' }}>
                No data found.
              </Title>
            )}
            <Row gutter={16}>
              {data?.photos.map((photo, idx) => (
                <Photo
                  key={`${photo.rover.id}-${photo.id}`}
                  loading={isLoading}
                  alt={photo.id}
                  src={photo.img_src}
                  title={photo.earth_date}
                  description={idx}></Photo>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
      <Footer>2021 - Pablo Sanguinetti</Footer>
    </Layout>
  );
};

export default App;
