import { useForm } from "react-hook-form";

function TodoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => console.log(data);
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: true, minLength: 5 })}
          placeholder="Email"
        />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 5 })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true, minLength: 5 })}
          placeholder="Password1"
        />
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
