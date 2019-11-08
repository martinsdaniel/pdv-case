import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import db from './app/lib/database/models/index';
import routes from './app/config/routes';
import { ErrorHandler } from './app/lib/common/error_handler';



const PORT = process.env.PORT || 3030;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
routes(app);
app.use(ErrorHandler);

async function startApp() {
  let sequelizeForceSync = null;
  
  if (process.env.FORCE_SYNC === 'TRUE') {
    sequelizeForceSync = { force: true };
  }

  await db.sequelize.sync(sequelizeForceSync);

  app.listen(PORT, (err) => {
    if (err)  console.log(`Error on Search ${PORT}.`, err.stack);
  });
}

export {
  app,
  startApp,
};

export default app;
