export type Quest = {
  id: string;
  text: string;
  user_id: string;
  created_on: Date;
  read_on: Date;
  tags: string[];
  refs: string[];
};

export type User = {
  id: string;
  ref_id: string;
  created_on: Date;
};