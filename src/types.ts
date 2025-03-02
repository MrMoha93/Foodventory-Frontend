export interface Food {
  id: string;
  name: string;
  category: Category;
  numberInStock: number;
  price: number;
  imageUrl: string;
  isFavored?: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}

export interface Id {
  id: string;
}

export interface TextColumn {
  path: string;
  label: string;
}

export interface ContentColumn<T> {
  key: string;
  content(item: T): JSX.Element;
}

export type Column<T> = TextColumn | ContentColumn<T>;
