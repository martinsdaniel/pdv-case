import healthcheck from '../healthcheck/controller';
import documentValidation from '../middleware/documentValidation';
import latLongValidation from '../middleware/latLongValidation';
import idValidation from '../middleware/idValidation';



const {
  create,
  search,
  searchById,
} = require('../pdv');

export default (router) => {
  router.get('/', healthcheck);
  
  // Create
  router.post('/pdv', documentValidation, create);
  //Search
  router.get('/pdv', latLongValidation, search);
   //Search by ID
  router.get('/pdv/:id', idValidation, searchById);
};
