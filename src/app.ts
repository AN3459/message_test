import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const app = express();
const port = 4000; // 选择一个可用的端口号

const intervalInMilliseconds = 5000; 


async function sendRequest() {
    const payload = {
      onetimeCodeForCPServer: '12345'
    };
  
    try {
      const response = await axios.post('http://172.19.0.4:3000/appli/users/login', payload);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
}

// 创建HTTP服务器
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

// 设置定时器，定期执行请求
setInterval(() => {
  sendRequest();
}, intervalInMilliseconds);
