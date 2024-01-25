export interface TodoListProps {
  todoList: string[];
  editTodo: (event: number) => void;
  deleteTodo: (event: number) => void;
}
