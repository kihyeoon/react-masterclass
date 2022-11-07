import { useForm } from "react-hook-form";

interface IForm {
  username: string;
  email: string;
  password: string;
  password1: string;
  extraErrors?: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError(
        "password1",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
    setError("extraErrors", { message: "Server offline." });
  };
  console.log("err", errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          style={{ borderColor: errors?.email?.message ? "red" : "" }}
          {...register("email", {
            required: "email is required",
            minLength: 5,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "네이버 이메일만 가능합니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>

        <input
          style={{ borderColor: errors?.email?.message ? "red" : "" }}
          {...register("username", {
            required: "작성해주세요.",
            minLength: 3,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "nico는 포함할 수 없습니다." : true,
              noNick: (value) =>
                value.includes("nick") ? "nick은 포함할 수 없습니다." : true,
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

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
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "작성해주세요.",
            minLength: 5,
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraErrors?.message}</span>
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
