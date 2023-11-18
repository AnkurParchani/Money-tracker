interface AppErrorInterface {
  isOperational: boolean;
  status: string;
  statusCode: number;
  message: string;
}

class AppError implements AppErrorInterface {
  public status: string;
  public isOperational: boolean;

  constructor(
    public statusCode: number,
    public message: string,
    public notIsOperational?: boolean
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.notIsOperational = undefined;
    this.isOperational = notIsOperational === undefined ? true : false;
    this.status = `${this.statusCode}`.startsWith("4") ? "fail" : "error";
  }
}

export default AppError;
