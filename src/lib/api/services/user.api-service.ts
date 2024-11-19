import { UserEntity } from '@/types/entities';
import { ApiResponse } from '../types';
import { ApiService } from './api-service';

export abstract class UserApiService {
 public static async getOne(): Promise<ApiResponse<UserEntity>> {
  return ApiService.get<UserEntity>('user');
 }
}
