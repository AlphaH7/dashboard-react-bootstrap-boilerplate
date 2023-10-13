import axios from 'axios';

const API_URL = "https://ax-pilot-interface-a2mwxcvet-alphah7.vercel.app/api/";

class ApiClient {
  constructor() {
    this.baseUrl = undefined;
    this.headers = {};
  }

  setUrl(url) {
    this.baseUrl = url || API_URL;
  }

  setHeaders(customHeaders) {
    this.headers = { ...this.headers, ...customHeaders };
  }

  getConfig(config) {

    return {
      ...config,
      headers: {
        ...config?.headers,
        ...this.headers,
      }
    };
  }

  async get(endpoint, config) {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response = await axios.get(
      `${this.baseUrl}${endpoint}`,
      this.getConfig(config)
    );
    return response.data;
  }

  async post(endpoint, data, config) {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response = await axios.post(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  async delete(endpoint, config) {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response = await axios.delete(
      `${this.baseUrl}${endpoint}`,
      this.getConfig(config)
    );
    return response.data;
  }

  async patch(endpoint, data, config) {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response = await axios.patch(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  async put(endpoint, data, config) {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response = await axios.put(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  processError(error) {
    if (error.response) {
      console.log('Error Status:', error.response.status);
      console.log('Error Message:', error.response.data);

      if (error.response.status === 401) {
        console.log('logging user out');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('UID');
          window.location.reload();
        }
      }
    } else if (error.request) {
      console.log('No response was received', error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Error Config:', error.config);
  }
}

export default ApiClient;
