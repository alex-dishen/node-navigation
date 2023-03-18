import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(await readFile('public/index.html', 'utf8'));
});

app.get('/about', async (req, res) => {
  res.send(await readFile('public/about.html', 'utf8'));
});

app.get('/contact', async (req, res) => {
  res.status(200).send(await readFile('public/contact.html', 'utf8'));
});

app.get('/styles.css', async (req, res) => {
  const css = await readFile('public/styles.css', 'utf8');
  res.set('Content-Type', 'text/css');
  res.send(css);
});

app.use(async function async(req, res, next) {
  res.status(404).send(await readFile('public/404.html', 'utf8'));
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Example app listening on port http://localhost:${port}!`
  );
});
