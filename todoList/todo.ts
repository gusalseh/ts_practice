type Todo = {
  id: number;
  title: string;
  done: boolean;
};
let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "양치하기", done: false },
    { id: 2, title: "영양제 먹기", done: false },
    { id: 3, title: "git push하기", done: false },
  ];
  return todos;
}

// CRUD methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo1(index: number, todo: Todo) {
  // 1. Todo 타입 변수의 첫번째 객체 전체를 바꿈
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

function completeTodo2(index: number, todo: Todo) {
  // 2. Todo 타입 변수의 첫번째 배열의 요소 중 done 속성만 바꿈
  todoItems[index - 1].done = true;
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item) => item.done);
}

function log(): void {
  console.log(todoItems);
}

// TODO: 아래 함수의 내용을 채워보세요.
// 아래 함수는 addTodo() 함수를 이용하여 2개의 새 할일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  const item1 = {
    id: 4,
    title: "아이템 4",
    done: false,
  };
  addTodo(item1);

  addTodo({
    id: 5,
    title: "아이템 5",
    done: false,
  });
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

completeTodo1(1, todoItems[1]);
log();

console.log(showCompleted());

deleteTodo(3);
log();
