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
}

export interface MockInterface {
  title: string;
  date: string;
  isCompleted: boolean;
  edit: boolean;
  id: string;
}
