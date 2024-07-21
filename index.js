import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Google Cloud Serverless community';
  res.send(`Hello ${name}! This is built using the code from my GitHub repo.`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloapp-github: listening on port ${port}`);
});
