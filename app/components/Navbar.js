import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {

    return (
      <nav className="navbar navbar-default" style={{/*visibility: 'hidden'*/}}>
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/campuses" activeClassName="active">ALL CAMPUSES</Link>
              </li>
              <li>
                <Link to="/campuses/add" activeClassName="active">ADD CAMPUS</Link>
              </li>
              <li>
                <Link to="/campuses/:id" activeClassName="active">VIEW CAMPUS</Link>
              </li>
              <li>
                <Link to="/students" activeClassName="active">ALL STUDENTS</Link>
              </li>
              <li>
                <Link to="/students/add" activeClassName="active">ADD STUDENT</Link>
              </li>
              <li>
                <Link to="/students/:id" activeClassName="active">VIEW STUDENT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

}