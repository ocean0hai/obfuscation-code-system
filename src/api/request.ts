import axios from 'axios';
import { ElMessage } from 'element-plus';
const URL='http://8.130.113.197:8080'
const api = axios.create({
  baseURL: URL,
  // baseURL: 'http://localhost:3000',
  // baseURL:
  // 'https://www.fastmock.site/mock/897825cb4cc73f1ae23df5e97bdd3f66/api',
  timeout: 10000
});

api.interceptors.request.use(
  config => {
    if(localStorage.getItem('token'))
      config.headers.Authorization='Bearer '+ localStorage.getItem('token')
    return config
  }
);

api.interceptors.response.use((response: any) => {
  if (response.data.code !== 200) {
    ElMessage.error(response.data.error as string);
    return;
  }
  return response.data;
});

export { api };
