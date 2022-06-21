import { Link } from "react-router-dom";
import './style.scss';

const Header = ( { logo } ) => {
    return(
        <header className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <img 
                        src={logo} 
                        alt="todo applicatopn" 
                    />
                    ToDo App
                </Link>
                <nav className="header__nav">
                    <Link to="/">TodoApp</Link> |
                    <Link to="/about">About</Link> |
                    <Link to="/test">404</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;