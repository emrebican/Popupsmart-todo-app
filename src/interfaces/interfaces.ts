export interface TodoInterface {
  title: string;
  edit: boolean;
  date: string;
}

export interface UserInterface {
  login: boolean;
  name: string;
}

export interface TodoState {
  todos: any;
  user: UserInterface;
  loading: boolean;
  error_message: string;
}
