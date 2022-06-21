import Modal from "../components/UI/Modal/Modal";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/UI/Input/Input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/UI/Button/Button";
import Textarea from "../components/UI/Textarea/Textarea";

const TodoEditPage = ({ todos, editTodo }) => {
  const params = useParams();
  const [current, setCurrent] = useState({});

  const handleCurrentTodo = (id) => {
    let currentItem = todos.find((todo) => todo.id == id);
    return currentItem;
  };
  useEffect(() => {
    setCurrent(handleCurrentTodo(params.id));
  });
  const navigate = useNavigate();
  const handleTodoFocus = (event, id) => {
    editTodo(event, id);
    navigate("/");
  };

  const handleOnchangeTodo = (event) => {
    setCurrent((current.title = event.target.value));
  };
  const handleTextarea = ( event ) => {
    console.log('textarea change');
  }
  return (
    <Modal>
      <div className="todo__modal">
        <Link to="/" className="todo__modal--close">
          <FaTimes />
        </Link>
        <h1 className="todo__modal--header">Задача номер - {current.id}</h1>
        <form
          className="todo__modal--form"
          onSubmit={(event) => {
            handleTodoFocus(event, current.id);
          }}
        >
          <Input
            value={current.title}
            onChange={(event) => {
              handleOnchangeTodo(event);
            }}
            name="title"
          />
          <Textarea
            name="descr"
            placeholder="Enter description..."
            onChange={(event) => {
              handleTextarea(event);
            }}
          />
          <Button>Submit</Button>
        </form>
      </div>
    </Modal>
  );
};

export default TodoEditPage;
