export type ResourceCategory = 'guide' | 'template' | 'tool' | 'course';

export interface Resource {
  title: string;
  description: string;
  category: ResourceCategory;
  image: string;
  downloadUrl: string;
  fileType: string;
  fileSize: string;
}