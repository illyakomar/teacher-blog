export interface ArticleEntity {
 _id: string;
 title: string;
 description: string;
 img: string;
 material: string;
 category: string;
 createdAt: Date;
 updatedAt: Date;
}

export interface ArticleEntityWithPagination {
 docs: ArticleEntity[];
 totalDocs: number;
 limit: number;
 totalPages: number;
 page: number;
 pagingCounter: number;
}

export interface UserEntity {
 _id: string;
 firstName: string;
 lastName: string;
 patronymic: string;
 scientificPosition: string;
 description: string;
 email: string;
 img: string;
 additionalInformation: string;
 createdAt: Date;
 updatedAt: Date;
 socialMedia: Partial<IconEntity>[];
}

export interface IconEntity {
 _id: string;
 icon: string;
 url: string;
 createdAt: Date;
 updatedAt: Date;
}

export interface BookEntity {
 _id: string;
 title: string;
 description: string;
 url: string;
 authors: AuthorsEntity[];
 createdAt: Date;
 updatedAt: Date;
}

export interface AuthorsEntity {
 _id: string;
 firstName: string;
 lastName: string;
 patronymic: string;
 createdAt: Date;
 updatedAt: Date;
}
