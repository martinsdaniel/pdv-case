const mappedResponseErrorTags = {
  INVALID_DOCUMENT: { message: 'INVALID_DOCUMENT', status: 500 },
  PDV_INVALID_ID: { message: 'PDV_INVALID_ID', status: 500 },
  EMPTY_LAT_AND_LONG: { message: 'EMPTY_LAT_AND_LONG', status: 406 },
  DEFAULT: { message: 'DEFAULT', status: 500 },

};

export default mappedResponseErrorTags;
