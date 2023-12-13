/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const statusCode = 400;

  const errorSources: TErrorSource = [err];

  return {
    statusCode,
    message: 'Validation error',
    errorSources,
  };
};

export default handleDuplicateError;
