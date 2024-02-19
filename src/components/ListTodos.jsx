import { useSelector } from "react-redux";

const ListTodos = () => {
  // storda tutulan veriye buu bileşende ihtiyacım oldu
  //stor'da verinin tutulduğu ilgili reducer'a abone ol
  const state = useSelector((store) => store.todoReducer);

  console.log(state);
  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
