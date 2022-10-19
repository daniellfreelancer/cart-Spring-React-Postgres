import React from 'react'


import {Link as LinkRouter} from 'react-router-dom'
export const Navbar = () => {


  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                  <LinkRouter className="navbar-brand" to="/">Crud App Spring + PostgreSQL + React.js</LinkRouter>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <LinkRouter to='/addUser' className='btn btn-outline-light' > Add User</LinkRouter>

              </div>
          </nav>
      </div>
  )
}
