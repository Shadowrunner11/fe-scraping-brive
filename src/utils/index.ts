import { AxiosError } from 'axios';

export function parseError(error?: AxiosError) {
  return (error?.response?.data as string) ?? error?.message;
}
