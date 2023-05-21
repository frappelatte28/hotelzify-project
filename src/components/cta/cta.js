import React from "react";
import "./cta.css";
import Airplane from "../../assets/airplane.png";
import FastFood from "../../assets/fast-food.png";
import SwimmingPool from "../../assets/swimming-pool.png";
export default function Cta() {
  return (
    <div style={{ marginTop: "200px" }}>
      <div class="row pt-115 pb-115">
        <div class="container">
          <div class="cta-inner">
            <div class="row justify-content-center">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
                  <div class="cta-text">
                    <div class="section-title mb-20">
                      <span class="title-tag">call to action</span>
                      <h2>The Thin Escape</h2>
                    </div>
                    <p>
                      Miranda has everything for your trip & every single
                      things.
                    </p>
                    <button class="main-btn btn-filled">take a tour</button>
                  </div>
                </div>
                <div class="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
                  <div class="cta-features">
                    <div class="single-feature">
                      <div className="icon">
                        <img src={Airplane}></img>
                      </div>
                      <div class="cta-desc">
                        <h3>Easy & Free Transport</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="single-feature">
                      <div class="icon">
                        <img src={FastFood}></img>
                      </div>
                      <div class="cta-desc">
                        <h3>Clean & Fresh Food</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="single-feature">
                      <div class="icon">
                        <img src={SwimmingPool}></img>
                      </div>
                      <div class="cta-desc">
                        <h3>Play Ground & Swiming Pool</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// #C98E16
