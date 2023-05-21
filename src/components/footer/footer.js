import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
      <div className="row copyrights-section">
        <div className="col copyright-text">Copyright by Slidesigma</div>
        <div className="col">
          <div className=" social-links">
            <div className="">
              <a>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
            <div className="">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <div className="">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
