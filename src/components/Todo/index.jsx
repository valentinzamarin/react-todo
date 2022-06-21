import TodoForm from "./Form";
import TodoList from "./List";
import './styles.scss';

const Todo = ( { createTodo, removeTodo }) => {
    return(
        <div>
            <h1>
                Todo Page
            </h1>
            <div className="todo">
                <TodoForm createTodo={createTodo} />
                <TodoList removeTodo={removeTodo} />
            </div>
        </div>
    )
}

export default Todo;