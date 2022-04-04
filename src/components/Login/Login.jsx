import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [switchToggled, setSwitchToggled] = useState(false);
  const toggelSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  };
  return (
    <div
      class={
        switchToggled ? "container1 sign-in-mode" : "container1 sign-up-mode"
      }
    >
      <div class="forms-container1">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Log In</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Email Id" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Register</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Company's Name" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email Id" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div class="input-field">
              <i class="fas fa-key"></i>
              <input type="password" placeholder="Re-Enter Password" />
            </div>
            <div class="input-field">
              <i class="fas fa-registered"></i>
              <input type="text" placeholder="Registration Number" />
            </div>
            <div class="mb-3 ">
              <i class="fas fa-id-card"></i>
              <label for="formFile" class="form-label">
                Liscence to Manufacture
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3 ">
              <label for="formFile" class="form-label">
                <i class="fas fa-file-signature"></i>
                Upload Digital Signature
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Accept Terms and Conditions
              </label>
            </div>
            <input type="submit" class="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div class="panels-container1">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>Register to the PetroStats</p>
            <button
              class="btn transparent"
              onClick={toggelSwitch}
              id="sign-up-btn"
            >
              Register
            </button>
          </div>
          <img src="./images/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>Log In to Petro Stats</p>
            <button
              class="btn transparent"
              onClick={toggelSwitch}
              id="sign-in-btn"
            >
              Log In
            </button>
          </div>
          <img src="./images/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
