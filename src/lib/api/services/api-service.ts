import { ApiErrorMessageEnum } from '../error-messages/api-error-message.enum';
import { ApiResponse } from '../types';

enum Methods {
 GET = 'GET',
}

export abstract class ApiService {
 private static async makeRequest<T = any>(
  method: Methods,
  url: string,
  data?: any,
  headers?: HeadersInit
 ): Promise<ApiResponse<T>> {
  try {
   const response = await fetch(`${process.env.NEXT_API_URL}/api/${url}`, {
    method,
    headers,
    body: JSON.stringify(data),
    cache: 'no-cache',
   });
   if (!response.ok) throw Error(await response.text());
   return { data: (await response.json()) as T };
  } catch (error: any) {
   try {
    return { error: JSON.parse(error.message) };
   } catch {
    return { error: { message: ApiErrorMessageEnum.INTERNAL_SERVER_ERROR } };
   }
  }
 }

 public static async get<T = any>(
  url: string,
  data?: any,
  headers?: HeadersInit
 ): Promise<ApiResponse<T>> {
  return this.makeRequest<T>(Methods.GET, url, data, headers);
 }
}
