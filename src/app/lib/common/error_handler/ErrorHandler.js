import util from '../util';

const PDVError = require('../types/PdvError');

const prepareResponse = async (res, status, message) => {
  res.status(status);
  res.json({
    message,
    status,
  });
};

/* eslint-disable no-unused-vars */
const ErrorHandler = (error, req, res, next) => {
  /* eslint-enable no-unused-vars */
  if (error instanceof PDVError) {
    const { status } = { ...error.extra } || 500;
    return prepareResponse(res, status, error.message);
  }

  return prepareResponse(res, 500, error.message);
};

export {
  ErrorHandler,
  prepareResponse,
};
