const fileFilter = function(req, files, cb) {
  console.log('Filter: ', files);
  let index, len;
  for (index = 0, len = files.length; index < len; ++index) {
    if (!files[index].originalname.match(/\.(pem))$/)) {
      req.fileValidationError = 'Only crt files are allowed!';
      return cb(new Error('Only crt files are allowed!'), false);
    }
  }
  cb(null, true);
};

exports.fileFilter = fileFilter;
