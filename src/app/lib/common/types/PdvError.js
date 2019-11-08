import mappedTags from '../error_handler/mappedTags';

module.exports = function PDVError(errorTag) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;

  if (mappedTags[errorTag.message] === errorTag) {
    this.message = mappedTags[errorTag.message].message;
    this.extra = { status: mappedTags[errorTag.message].status };
  } else {
    this.message = mappedTags.PDV_ERROR.message;
    this.extra = { status: mappedTags.PDV_ERROR.status };
  }
};

require('util').inherits(module.exports, Error);
