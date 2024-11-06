export const isActive = (currentPath: string, itemPath: string) => {
 if (itemPath === '/') {
  return currentPath === itemPath;
 }
 return currentPath.startsWith(itemPath);
};
