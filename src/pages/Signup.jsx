import React from 'react';

const Signup = () => (
  <div className="container-fluid py-5 w-100">
    <div className="row justify-content-center mx-0">
      <div className="col-12 col-md-6 col-lg-4">
        <h2 className="fw-bold mb-3 text-center">Sign Up</h2>
        <button className="btn btn-outline-danger w-100 mb-3">Continue with Google</button>
        <div className="text-center mb-2">OR</div>
        <form>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="+91" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        <div className="text-center mt-3">
          <a href="/login" className="small">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Signup; 