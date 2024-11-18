import { ArticleEntity, ArticleEntityWithPagination } from '@/types/entities';
import { ApiResponse } from '../types';
import { ApiService } from './api-service';

export abstract class ArticleApiService {
 public static async getLast(): Promise<
  ApiResponse<ArticleEntityWithPagination>
 > {
  return ApiService.get<ArticleEntityWithPagination>('article');
 }

 public static async selectOne(
  id: string
 ): Promise<ApiResponse<ArticleEntity>> {
  return ApiService.get<ArticleEntity>(`article/${id}`);
 }
}
