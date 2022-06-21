import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input"
import Alert from "../../UI/Alert/Alert"
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TodoForm = ( { createTodo } ) => {
    const [ alert , setAlert ] = useState( false );
    
    const handleForm = ( event ) => {
        event.preventDefault();

        let $this = event.target,
            title = $this.title.value;

        if( !title ) {
            setAlert( true );
            return false;
        }
        createTodo( title );
        $this.reset();
    }

    useEffect( () => {
        setTimeout( () => {
            setAlert( false )
        }, 5000 )
    }, [ alert ] )

    return(
        <form className="todo__form" onSubmit={handleForm}>
            {alert === true &&
                <Alert>
                    <div className="todo__alert">
                        <p>
                            Empty field
                        </p>
                        <span onClick={ () => { setAlert( false )}}>
                            <FaTimes />
                        </span>
                    </div>
                </Alert>
            }
            <Input 
                placeholder="Add task..."
                name="title"
            />
            <Button>
                Submit
            </Button>
        </form>
    )
}
export default TodoForm;