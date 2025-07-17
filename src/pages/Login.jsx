import React from 'react';

const Login = () => (
  <div className="container-fluid py-5 w-100">
    <div className="row justify-content-center mx-0">
      <div className="col-12 col-md-6 col-lg-4">
        <h2 className="fw-bold mb-3 text-center">Login</h2>
        <button className="btn btn-outline-danger w-100 mb-3">Continue with Google</button>
        <div className="text-center mb-2">OR</div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Log in</button>
        </form>
        <div className="d-flex justify-content-between mt-3">
          <a href="/forgot" className="small">Forgot Password?</a>
          <a href="/signup" className="small">Sign up</a>
        </div>
      </div>
    </div>
  </div>
);

export default Login; 