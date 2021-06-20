import { IApiStructure } from './ApiStructure.interface';

export const About: IApiStructure = {
  title: 'Get Profile',
  method: 'GET',
  url: '/user/profile',
  data: {
    firstName: 'Bhargab',
    lastName: 'Hazarika',
    email: 'me@maxyspark.me',
    phone: '+91-7002480018',
  }
};
