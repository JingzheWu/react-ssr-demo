import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Home } from './Home';

const clientDistDir = path.resolve(__dirname, '../dist/client');
const htmlPath = path.resolve(clientDistDir, 'index.html');

const app = express();

app.get('/', (req, res) => {
  // 读取 dist/client/index.html 文件
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const app = ReactDOMServer.renderToString(<Home />);
  // 将渲染后的 React HTML 插入到 div#root 中
  const finalHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  );
  res.send(finalHtml);
});

// 提供静态资源访问服务
app.use(express.static(clientDistDir));

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`http://127.0.0.1:${PORT}`);
});
