import axios from 'axios';
import { ElMessage } from 'element-plus';
const URL='http://8.130.113.197:8080'
const api = axios.create({
  baseURL: URL,
  timeout: 10000,
});

api.interceptors.request.use(
  config => {
    if(localStorage.getItem('token'))
      config.headers.Authorization=localStorage.getItem('token')
    return config
  }
);

api.interceptors.response.use((response: any) => {
  
  if(response.data?.code!==500){
    return response.data
  }else{
    ElMessage.error(response.data.msg as string)
    return ;
  }
});

export { api };
