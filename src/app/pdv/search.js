import { responseHandler } from '../lib/common/response_handler';
import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const db = require('../lib/database/models/index');

const { pdv: PdvModel } = db;

module.exports = async (req, res, next) => {
  try {
    const { lat, long } = req.body;
    const pdvs = await PdvModel.getPdvByLatLong(lat, long);
    return responseHandler(res, 200, { pdvs });
  } catch (err) {
    return next(new ErrorTypes.PDVError(MappedTags.DEFAULT));
    
  }
};
