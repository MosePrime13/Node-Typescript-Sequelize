import { createModels } from './models/index';
import * as express from 'express';
import * as dotenv from 'dotenv';
const dbConfigs = require('./config/config.json');

dotenv.config();
const app = express();

createModels(dbConfigs[process.env.NODE_ENV]).sequelize.sync({ force: true }).then(function() {console.log('Nice! Database looks fine')});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening at port ${port}`));