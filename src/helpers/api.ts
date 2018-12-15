import axios from 'axios';

const apiFactory = (baseUrl: string) => {
    
    const service = axios.create({
      baseURL: baseUrl
    });
  
    return service;
};
  
export default apiFactory;
  