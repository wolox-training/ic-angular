export class ServiceResponseModel<T> {
  code: number;
  data: T;
  message: string;
  status: boolean;
}
