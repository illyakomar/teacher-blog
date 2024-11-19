import { AuthorsEntity, UserEntity } from '@/types/entities';

export const isActive = (currentPath: string, itemPath: string) => {
 const cleanCurrentPath = currentPath.split('?')[0];
 const cleanItemPath = itemPath.split('?')[0];

 if (cleanItemPath === '/') {
  return cleanCurrentPath === cleanItemPath;
 }
 return cleanCurrentPath.startsWith(cleanItemPath);
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
