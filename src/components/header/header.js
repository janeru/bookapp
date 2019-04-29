import React from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd';
import 'antd/dist/antd.css';


let header = (props) => {
    let openCategoryList = (e) => {

        console.log(document.querySelector('.categories').style.display)
        if (document.querySelector('.categories').style.display === "block") {
            document.querySelector('.categories').style.display = "none"
            document.querySelector('.logo').style.display = "block"
            document.querySelector('.iconBar').style.display = "block"

        } else {
            document.querySelector('.categories').style.display = "block"
            document.querySelector('.logo').style.display = "none"

        }
    }
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
                        <li
                        // className="active"
                        ><NavLink to="/books/category/NodeJS">NodeJS</NavLink></li>
                    </ul>
                    <button className="categoryBtn" onClick={openCategoryList}><Icon className="iconBar" type="bars" /></button>
                </nav>
            </div>
        </header>
    )
}

export default header