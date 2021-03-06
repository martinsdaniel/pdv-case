import { responseHandler } from '../lib/common/response_handler';
import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const db = require('../lib/database/models/index');

const { pdv: PdvModel } = db;
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pdvs = await PdvModel.findByPk(id, { raw: true });
    
    return responseHandler(res, 200, { pdvs });
  } catch (err) {
    return next(new ErrorTypes.PDVError(MappedTags.DEFAULT));
  }
};
