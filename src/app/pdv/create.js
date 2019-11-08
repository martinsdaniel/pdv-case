import { responseHandler } from '../lib/common/response_handler';
import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const db = require('../lib/database/models/index');

const { pdv: PdvModel } = db;
module.exports = async (req, res, next) => {
  try {
    await PdvModel.create({
      ...req.body,
    });

    return responseHandler(res, 200, null, 'PDV was successfully created');
  } catch (err) {
    return next(new ErrorTypes.PDVError(MappedTags.DEFAULT));
  }
};
