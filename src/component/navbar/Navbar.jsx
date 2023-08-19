import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxAvatar } from "react-icons/rx"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow bg-body-tertiary rounded ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Hello Admin <br /> <span style={{ fontSize: '.7rem' }}>4.45 PM  -  19 Jan 2023</span> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <form className="d-flex flex-row justify-content-center align-items-center " role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'400px'}} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className=' d-flex flex-row justify-content-center align-items-center'>
          <Link to="/otifaction "><MdOutlineNotificationsActive className='icons-avatar'/></Link>
          <Link to="/setting "><RxAvatar className='icons-avatar'/></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar