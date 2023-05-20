import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <footer>
      <div className="subscription-section mb-45 justify-content-center ">
        <div class="col-lg-8">
          <div class="subscribe-content text-center">
            <img src={Logo}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              doing eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <form class="subscribe-form mt-50">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
