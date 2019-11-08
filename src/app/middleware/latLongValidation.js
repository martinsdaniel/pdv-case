import { ErrorTypes, MappedTags } from '../lib/common/error_handler';

const latLongValidation = (req, res, next) => {
  const { lat, long } = req.body;

  if (lat && long) {
    return next();
  }

  return next(new ErrorTypes.PDVError(MappedTags.EMPTY_LAT_AND_LONG));
};

export default latLongValidation;
