import { useState } from "react";
const Signup = () => {
  const handleSignup = (e: any) => {
    e.preventDefault();
    alert("test button!");
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="modal fade"
      id="signup-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleSignup} method="post">
        <div className="modal-dialog">
          <div className="modal-content rounded-0 p-3">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="form-label mt-2">Full name * </label>
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  name="fname"
                  className="form-control rounded-0"
                  placeholder="First name"
                  required
                />
                &nbsp;
                <input
                  type="text"
                  name="lname"
                  className="form-control rounded-0"
                  placeholder="Last name"
                  required
                />
              </div>
              <label htmlFor="uname1" className="form-label mt-2">
                Username *{" "}
              </label>
              <input
                type="text"
                name="uname1"
                className="form-control rounded-0"
                id="uname1"
                required
              />

              <label htmlFor="email" className="form-label mt-2">
                Email address *{" "}
              </label>
              <input
                type="email"
                name="email"
                className="form-control rounded-0"
                id="email"
                required
              />
              <small>
                Magni et iste beatae corporis cumque molestiae dolore amet nihil
                sed in at iure dicta quo maxime ratione, voluptates quidem vel
                alias.
              </small>
              <br />
              <label htmlFor="pswd1" className="form-label mt-3">
                Password *{" "}
              </label>
              <div className="position-relative">
                <input
                  type={!showPassword ? "password" : "text"}
                  name="pswd"
                  className="form-control rounded-0"
                  id="pswd1"
                  required
                />
                <span
                  className="material-symbols-outlined position-absolute text-secondary"
                  style={{
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "1.3rem",
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowPassword((curr) => !curr)}
                >
                  {!showPassword ? "visibility_off" : "visibility"}
                </span>
              </div>

              <label htmlFor="pswd2" className="form-label mt-3">
                Confirm Password *{" "}
              </label>
              <input
                type="password"
                name="confirm_pswd"
                className="form-control rounded-0"
                id="pswd2"
                required
              />
              <small>
                Minimum of 10 characters and must meet our password{" "}
                <a href="#" className="text-dark">
                  guidelines.
                </a>
              </small>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <small>I agree to the use of terms and privacy policy.</small>
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="reset"
                className="btn btn-light border rounded-0"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary rounded-0">
                Create an account
              </button>
            </div>
            <hr className="bg-danger border-1 border-top border-secondary"></hr>
            <div className="text-center">
              <small>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#signin-modal"
                >
                  Sign In
                </a>
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
