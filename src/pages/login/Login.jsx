import React from 'react'
import Illustration from "../../assets/images/register-img.jpg"
import './login.css'

const Login = () => {

  return (
    <div className=" canvas">
      <div className='col-md-6 wrapper'>
        <div className="images">
          <img src={Illustration} alt="" />
        </div>
      </div>

      <form data-toggle="validator" className='col-md-6 form-container d-flex flex-column align-content-center flex-wrap '>
        <div className="form-group col-md-9">
          <label htmlFor="inputEmail" className="control-label textFiled text-secondary-emphasis pt-4">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
          <div className="help-block with-errors"></div>
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="inputPassword" className="control-label textFiled text-secondary-emphasis pt-4">Password</label>
          <div className="form-inline">
            <div className="form-group">
              <input type="password" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required />
            </div>
          </div>
        </div>
        <div className="form-group mt-5">
          <button type="submit" className="btn btn-danger">Submit</button>
        </div>
      </form>
    </div>

  )
}

export default Login