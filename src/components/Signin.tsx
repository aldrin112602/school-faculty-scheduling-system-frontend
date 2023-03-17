const Signin = () => {
  const handleSignin = (e: any) => {
    e.preventDefault();
    alert("test button!");
  };

  return (
    <div
      className="modal fade"
      id="signin-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleSignin} method="post">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="uname" className="form-label mt-1">
                Username{" "}
              </label>
              <input
                type="text"
                name="uname"
                className="form-control rounded-0"
                id="uname"
                required
              />
              <label htmlFor="pswd" className="form-label mt-3">
                Password{" "}
              </label>
              <input
                type="password"
                name="pswd"
                className="form-control rounded-0"
                id="pswd"
                required
              />
            </div>
            <div className="modal-footer pb-0">
              <button
                type="reset"
                className="btn btn-light border rounded-0"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary rounded-0">
                Sign In
              </button>
            </div>
            <hr className="bg-danger border-1 border-top border-secondary"></hr>
            <div className="text-center pb-3">
              <small>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#signup-modal"
                >
                  Sign Up
                </a>
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
