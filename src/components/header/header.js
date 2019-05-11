import React from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import $ from 'jquery';
let header = (props) => {
    let openCategoryList = (e) => {
        console.log(window.buttonList)
        window.buttonList = !window.buttonList
        console.log(window.buttonList)
        if (window.buttonList) {
            if (window.innerWidth >= 768) {
                document.querySelector('.categories').style.display = "flex"
                $(".categories").slideUp("slow")
                // document.querySelector('.categories').style.display = "flex"
                document.querySelector('.logo').style.display = "block"
                document.querySelector('.iconBar').style.display = "none"
            } else {
                // document.querySelector('.categories').style.display = "none"
                console.log($(".categories"))
                $(".categories").slideDown("slow")
                document.querySelector('.iconBar').style.display = "block"
            }


        } else {
            $(".categories").slideUp("slow")


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