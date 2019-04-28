import React from 'react';
import { NavLink } from 'react-router-dom'

let header = (props) => {
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <NavLink to="/" className="logo"><i className="fas fa-book-open"></i></NavLink>
                    <ul className="categories">
                        <li><NavLink to="/books/category/HTML">HTML</NavLink></li>
                        <li><NavLink to="/books/category/CSS">CSS</NavLink></li>
                        <li><NavLink to="/books/category/JavaScript">JavaScript</NavLink></li>
                        <li><NavLink to="/books/category/React">React</NavLink></li>
                        <li className="active"><NavLink to="/books/category/NodeJS">NodeJS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default header