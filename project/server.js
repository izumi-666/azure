const express = require('express');
const path = require('path');

const app = express();

// Azure 会提供 PORT
const port = process.env.PORT || 3000;

// 静态目录
app.use(express.static(path.join(__dirname, 'public')));

// 默认路由（防止404）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
