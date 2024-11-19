import { AuthorsEntity, UserEntity } from '@/types/entities';

export const isActive = (currentPath: string, itemPath: string) => {
 if (itemPath === '/') {
  return currentPath === itemPath;
 }
 return currentPath.startsWith(itemPath);
};

export const getFullDate = (date: Date | undefined) => {
 if (!date) return;
 const fullDate = new Date(date);
 return fullDate.toLocaleDateString();
};

export const getAuthorShortName = (author: AuthorsEntity) => {
  return `${author.firstName[0]}.${author.patronymic[0]}. ${author.lastName}`;
 };

export const getUserShortName = (author: UserEntity) => {
 return `${author.firstName} ${author.lastName}`;
};
