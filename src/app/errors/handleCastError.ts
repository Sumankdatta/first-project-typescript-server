import mongoose from 'mongoose';
import { TErrorSource } from '../interface/error';

const handleCastError = (err: mongoose.Error.CastError) => {
  const statusCode = 400;

  const errorSources: TErrorSource = [
    { path: err?.path, message: err?.message },
  ];
  return {
    statusCode,
    message: 'Validation ID',
    errorSources,
  };
};

export default handleCastError;
