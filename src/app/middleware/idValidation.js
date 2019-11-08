import validate from 'uuid-validate';
import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const idValidation = (req, res, next) => {
  const { id } = req.params;

  if (validate(id)) {
    return next();
  }

  return next(new ErrorTypes.PDVError(MappedTags.PDV_INVALID_ID));
};

export default idValidation;
