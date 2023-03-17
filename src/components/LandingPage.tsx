import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
const LandingPage = () => {
  const [theme, setTheme] = useState(true); // light mode

  // change theme
  const changeTheme = () => {
    setTheme((curr) => !curr);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        style={
          !theme
            ? {
                backgroundImage: "linear-gradient(-45deg, #A555EC, #4B56D2)",
                boxShadow: "0 5px 20px rgba(0, 0, 0,  0.3)",
              }
            : {
                background: "#222",
                boxShadow: "0 1px 20px rgba(255, 255,255,  0.1)",
              }
        }
      >
        <div className="container-fluid px-4 py-3">
          <a
            className="navbar-brand text-white d-flex align-items-center gap-2"
            href="#"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            <span className="material-symbols-outlined">favorite</span> School
            Faculty Scheduling System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <span
                className="material-symbols-outlined text-white"
                style={{
                  cursor: "pointer",
                }}
                onClick={changeTheme}
              >
                dark_mode
              </span>
              <button
                className="btn text-white border rounded-0"
                data-bs-toggle="modal"
                data-bs-target="#signin-modal"
              >
                Sign In
              </button>
              <button
                className="btn btn-light rounded-0"
                data-bs-toggle="modal"
                data-bs-target="#signup-modal"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main
        style={{
          minHeight: "40rem",
          marginTop: "5rem",
          background: !theme ? "#4B56D2" : "white",
        }}
        className={!theme ? "text-white" : "bg-dark text-white"}
      >
        <div className="row p-5">
          <div className="col">
            <h3>School Faculty Scheduling System</h3>
            <br />
            <p>
              A school faculty scheduling system is a software tool that helps
              educators and administrators plan and schedule their work
              assignments and responsibilities. <br /> It can be used to create
              schedules for teachers, administrators, and other staff members,
              as well as to assign classrooms and other resources. <br /> Some
              school faculty scheduling systems allow users to input their
              availability and preferences, and the system will generate a
              schedule based on these inputs. <br /> Others allow users to
              manually create and modify schedules, either individually or as a
              group. <br /> The main benefits of a school faculty scheduling
              system are that it can help improve efficiency and reduce the time
              and effort required to create and manage schedules. <br />
              It can also help ensure that schedules are fair and equitable, and
              that staff members are not overworked or underutilized. <br />
              <br />
            </p>
            <br />
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-primary shadow"
                style={{ width: "20rem", height: "3rem" }}
              >
                Get started
              </button>
            </div>
          </div>
        </div>

        <svg
          style={{ marginTop: "-4rem" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,165.3C672,128,768,96,864,85.3C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </main>

      {/* Signin modal */}
      <Signin />

      {/* Signup modal */}
      <Signup />
    </>
  );
};

export default LandingPage;
