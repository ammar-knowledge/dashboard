import axios from 'axios';
import { GetLocal } from './localStorage';

const API_URL = 'http://localhost:3000';
const axiosHttp = axios.create({
  baseURL: `${API_URL}`,
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token = GetLocal('user-token');
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  },
);

export { axiosHttp };

// Test code
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import { GetLocal } from './localStorage';
import { axiosHttp } from './api';

jest.mock('axios');
jest.mock('./localStorage');

describe('axiosHttp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set Authorization header with token from localStorage', async () => {
    const token = 'test-token';
    GetLocal.mockReturnValue(token);
    axios.mockResolvedValue({});

    await axiosHttp.get('/test');

    expect(axios).toHaveBeenCalledWith({
      baseURL: 'http://localhost:3000',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
      url: '/test',
    });
  });

  it('should not set Authorization header if token is not present in localStorage', async () => {
    GetLocal.mockReturnValue(null);
    axios.mockResolvedValue({});

    await axiosHttp.get('/test');

    expect(axios).toHaveBeenCalledWith({
      baseURL: 'http://localhost:3000',
      headers: {},
      method: 'get',
      url: '/test',
    });
  });

  it('should handle request error', async () => {
    const error = new Error('Request failed');
    GetLocal.mockReturnValue('test-token');
    axios.mockRejectedValue(error);

    await expect(axiosHttp.get('/test')).rejects.toThrow(error);
  });
});
