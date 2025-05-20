type RichTextChild = {
  type: string;
  text: string;
};

type RichTextBlock = {
  type: 'paragraph' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'list';
  children: RichTextChild[];
};

type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

type StrapiImage = {
  id: number;
  url: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
};

type Article = {
  id: number;
  title: string;
  slug: string;
  description: RichTextBlock[];
  image?: StrapiImage;
};

 type JobOffer = {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: {
    id: number;
    name: string;
    url: string;
    alternativeText?: string | null;
    caption?: string | null;
  }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId?: string;
};

export type {
  Article,
  RichTextBlock,
  StrapiImage,
  StrapiImageFormat,
  RichTextChild,
  JobOffer,
};
