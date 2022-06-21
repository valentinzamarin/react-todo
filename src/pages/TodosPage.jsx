import { Outlet } from "react-router-dom";
import Todo from "../components/Todo";

const TodosPage = ( { handleAddTodo, handleRemoveTodo } ) => {
    return(
        <div className="container">
            <Todo createTodo={handleAddTodo} removeTodo={handleRemoveTodo}  />
            <Outlet />
        </div>
    )
}

export default TodosPage;