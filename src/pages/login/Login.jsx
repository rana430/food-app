import React from 'react'

const Login = () => {
  return (
    <div className="container text-center d-flex flex-row justify-content-center align-items-center align-content-center flex-wrap" >
      <div className="row">
        <div className="col">
          <img src="./pic.jpg" alt="" srcset="" />
        </div>
        <div className="col shadow bg-body-tertiary rounded">
          <form className="row g-3 needs-validation text-start" style={{}} novalidate>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label mt-5 ">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Enter your Password"/>
            </div>
            <div className="col-12 d-grid gap-2 my-5 text-center">
              <button className="btn submit btn-primary" type="submit">Login In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login