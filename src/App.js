import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from './components/Header';
import TodosPage from './pages/TodosPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';

import { useEffect, useState } from 'react';

import { AppContext } from "./context";
import TodoEditPage from './pages/TodoEditPage';

const App = () => {
  const [ todos, setTodos ] = useState( 
    JSON.parse( localStorage.getItem( 'reactTodos' ) ) || []
  )

  useEffect( () => {
    localStorage.setItem( 'reactTodos', JSON.stringify( todos ) );
  }, [ todos ] )
  
  const handleAddTodo = ( newTodo ) => {
    let newItem = { id : Date.now(), title : newTodo };
    setTodos( [ ...todos, newItem ] )
  }
  
  const handleRemoveTodo = ( id ) => { 
    setTodos(
      todos.filter( todo => todo.id !== id )
    )
  }
  const handleEditTodo = ( event, id ) => {
      event.preventDefault();
      let $this = event.target,
          title = $this.title.value,
          descr = $this.descr.value;
      if( !title ) {
        alert('empty field');
        return false;
      }
      setTodos( 
        todos.map( todo => {
            if( todo.id == id ) {
              todo.title = title;
              todo.descr = descr;
            }
            return todo;
          }
        )
      );
      
  }
  
  return (
    <AppContext.Provider value={{
        todos
    }}>
      <BrowserRouter>
        <div className="App">
          <Header logo={logo}/>
          <Routes>
              <Route exact path="/" element={ <TodosPage handleAddTodo={handleAddTodo} handleRemoveTodo={handleRemoveTodo} />} >
                <Route path="/todo/:id" element={ <TodoEditPage todos={todos} editTodo={handleEditTodo} />} />
              </Route>
              <Route path="/about" element={ <AboutPage />} />
              <Route path="*" element={ <NotFoundPage /> } /> 
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
