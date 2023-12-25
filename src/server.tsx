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
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const app = ReactDOMServer.renderToString(<Home />);
  const finalHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  );
  res.send(finalHtml);
});

app.use(express.static(clientDistDir));

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`http://127.0.0.1:${PORT}`);
});
