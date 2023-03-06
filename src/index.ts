import express from 'express';
import { readFile } from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      readFile(
        'asdlfkjlasdkjflkasdjflkajsdlfkjsadlkfjlaksdjf',
        'utf-8',
        () => {}
      )
    );
});

app.listen(port, () => {
  console.log(`⚡️[server]: Example app listening on port ${port}!`);
});
