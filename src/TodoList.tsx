import { useForm } from "react-hook-form";

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

/*
function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todo.length <10) {
      return setTodoError("Todo must be at least 10 characters");
    }
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="Write a to do" />
        <button>Add</button>
        {todoError && <span>{todoError}</span>}
      </form>
    </div>
  );
}
*/

export default TodoList;
