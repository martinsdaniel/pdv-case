import { ErrorHandler } from './ErrorHandler';
import MappedTags from './mappedTags';

const PDVError = require('../types/PdvError');

const ErrorTypes = {
  PDVError,
};

export {
  ErrorHandler,
  ErrorTypes,
  MappedTags,
};