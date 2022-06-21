import Button from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

const TodoItem = ( {todo, idx, removeTodo} ) => {    
    let navigate = useNavigate();

    const removeFromList = ( id ) => {
        removeTodo( id )
    }
    return(
        <div className="todo__item">
            <span 
                className="todo__remove"
                onClick={ () => removeFromList(todo.id) }
            >
                <FaTimes />
            </span>
            <h4 className="todo__title">
                {todo.title}
            </h4>
            <p>
                {todo.descr}
            </p>
            <div className="todo__buttons">
                <Button onClick={ () => { navigate(`/todo/${todo.id}`); } }>
                    Edit
                </Button>
            </div>
        </div>
    )
}

export default TodoItem;