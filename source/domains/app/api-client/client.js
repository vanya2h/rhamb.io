// @flow

import axios from 'axios';

class Client {
  axiosInstance: any = axios.create({
    baseURL: 'http://localhost:3001',
  });

  setInstance = (nextInstance: any): void => {
    this.axiosInstance = nextInstance;
  };

  get instance() {
    return this.axiosInstance;
  }
}

export const client = new Client();
