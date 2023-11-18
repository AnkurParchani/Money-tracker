import handleServerSideError from "./handleServerSideError";

export default function catchAsync(
  fn: (req: Request, res: Response) => Promise<any>
) {
  return async (req: Request, res: Response) => {
    try {
      return await fn(req, res);
    } catch (err: unknown) {
      return handleServerSideError(err);
    }
  };
}
