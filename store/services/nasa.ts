import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// TODO: type for rover photo

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

export type params = {
  name: string;
  page?: number;
  sol?: number;
  camera?: string;
};

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/',
  }),
  endpoints: (builder) => ({
    getPhotosByRover: builder.query<any, params>({
      query: (params) =>
        `rovers/${params.name}/photos?sol=${params.sol || 1000}&page=${
          params.page || 1
        }&camera=${params.camera?.toLowerCase() || 'fhaz'}&api_key=${API_KEY}`,
    }),
    getRoverData: builder.query<any, string>({
      query: (name) => `manifests/${name}?api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetPhotosByRoverQuery, useGetRoverDataQuery } = nasaApi;
