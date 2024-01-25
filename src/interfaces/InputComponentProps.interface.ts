export interface InputComponentProps {
  addToDo: (event: string) => void;
  updateTodo: (event: string, index: number) => void;
  editingItem: string;
  editingIndex: number;
  isEdit: boolean;
}
