import express from 'express';
import parser from 'body-parser'
import cors from 'cors'
import path from 'path'
import routers from './routers'

const app = express();
const port = process.env.PORT || 8000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')), routers)

app.listen(port, () => {
    console.log(`Server start at port ${port}`)
})

export default app;