export interface TodoInterface {
  title: string;
  id: string;
  completed: boolean;
  edit: boolean;
  date: string;
}

interface UserInterface {
  login: boolean;
  name: string;
}

export interface TodoState {
  todos: any;
  user: UserInterface;
}
