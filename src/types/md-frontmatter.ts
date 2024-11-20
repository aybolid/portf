type BaseFrontmatter = {
  layout: string;
  title: string;
  description: string;
  tags: string[];
  links?: {
    label: string;
    url: string;
  }[];
};

type ProjectFrontmatter = {
  type: string;
} & BaseFrontmatter;

type WorkFrontmatter = {
  company: string;
  domain: string;
  position: string;

  startDate: string;
  endDate: string | null;
} & BaseFrontmatter;

type PostType = "project" | "work";

type PostFrontmatter<T extends PostType> = T extends "work"
  ? WorkFrontmatter
  : T extends "project"
    ? ProjectFrontmatter
    : never;

export type { PostType, PostFrontmatter, ProjectFrontmatter, WorkFrontmatter };
