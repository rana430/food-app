import React from 'react'
import Illustration from "../../assets/images/register-img.jpg"
import { useForm } from "react-hook-form";
import './login.css'
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    // e.preventDefault()
    console.log(e);
  }

  return (
    <div className=" canvas">
      <div className='col-md-6 wrapper'>
        <div className="images">
          <img src={Illustration} alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} data-toggle="validator" className='col-md-6 form-container d-flex flex-column align-content-center flex-wrap '>
        <div className="form-group col-md-9">
          <label htmlFor="inputEmail" className="control-label textFiled text-secondary-emphasis pt-4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            {...register("email",
              {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            data-error="Bruh, that email address is invalid"
            required
          />
          <div className="help-block with-errors">{errors.email && <p>Please check the Email</p>}</div>
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="inputPassword" className="control-label textFiled text-secondary-emphasis pt-4">Password</label>
          <div className="form-inline">
            <div className="form-group">
              <input
                type="password"
                data-minlength="6"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
                required
              />
              <div className="help-block with-errors">{errors.password && <p>Please check the Password</p>}</div>
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