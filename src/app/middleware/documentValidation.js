import { cnpj } from 'cpf-cnpj-validator';
import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const documentValidation = (req, res, next) => {
  const { document } = req.body;
  if (cnpj.isValid(document)) {
    return next();
  }
  return next(new ErrorTypes.PDVError(MappedTags.INVALID_DOCUMENT));
};

export default documentValidation;
