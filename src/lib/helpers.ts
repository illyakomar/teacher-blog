import { UserEntity } from '@/types/entities';

export const isActive = (currentPath: string, itemPath: string) => {
 if (itemPath === '/') {
  return currentPath === itemPath;
 }
 return currentPath.startsWith(itemPath);
};

export const getFullDate = (date: Date) => {
 const fullDate = new Date(date);
 return fullDate.toLocaleDateString();
};

export const getAuthorShortName = (author: UserEntity) => {
 return `${author.firstName} ${author.lastName}`;
};
