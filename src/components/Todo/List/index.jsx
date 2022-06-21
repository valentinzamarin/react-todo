import Alert from "../../UI/Alert/Alert";
import TodoItem from "./Item";

import { useContext } from "react";
import { AppContext } from "../../../context";

const TodoList = ( { removeTodo }) => {
    let list = useContext(AppContext)
    if( !list.todos.length ) {
        return(
            <Alert>
                Nothing
            </Alert>
        )
    }
    return(
        <div className="todo__list">      
            {list.todos.map( ( todo, idx ) => {
                return <TodoItem todo={todo} key={todo.id} idx={idx} removeTodo={removeTodo} />
            })}
        </div>
    )
}

export default TodoList;