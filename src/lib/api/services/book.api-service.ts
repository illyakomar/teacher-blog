import { BookEntity } from '@/types/entities';
import { ApiResponse } from '../types';
import { ApiService } from './api-service';

export abstract class BookApiService {
 public static async getMany(): Promise<ApiResponse<BookEntity[]>> {
  return ApiService.get<BookEntity[]>('book');
 }
}
