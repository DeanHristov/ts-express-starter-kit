import { Request, Response as NextResponse } from 'express';
import { STATUS_CODE } from '../utils/statusCodes';
import Response from '../utils/Response';

export const health = (req: Request, res: NextResponse) => {
  res.status(STATUS_CODE.OK).json(new Response('Ok'));
};
