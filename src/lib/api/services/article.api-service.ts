import { ArticleEntity, ArticleEntityWithPagination } from '@/types/entities';
import { ApiResponse } from '../types';
import { ApiService } from './api-service';

export abstract class ArticleApiService {
 public static async getLast(
  page?: number,
  limit?: number
 ): Promise<ApiResponse<ArticleEntityWithPagination>> {
  return ApiService.get<ArticleEntityWithPagination>(
   `article?page=${page}&limit=${limit}`
  );
 }

 public static async selectOne(
  id: string
 ): Promise<ApiResponse<ArticleEntity>> {
  return ApiService.get<ArticleEntity>(`article/${id}`);
 }
}
