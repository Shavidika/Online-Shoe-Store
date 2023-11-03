import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div >
        <footer className="text-center text-lg-start text-dark mt-12" style={{ backgroundColor: "#ECEFF1" }}>
          <section className="d-flex justify-content-between p-0 text-white">
          </section>
          <section className="section">
            <div className="subscribeNewsletter">
                <div className="subscribeNewsletter-Topic">
                    <h1>STAY UPTO DATE ABOUT</h1>
                    <h1>OUR LATEST OFFERS</h1>
                </div>
                <div className="subscribeNewsletter-mail">
                    <input className="subscribeNewsletter-mail-text" type="text" placeholder="     Enter your email address"/>
                    <button type="button" class="btn btn-dark">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className="container text-center text-md-start mt-0">
              <div className="row mt-0">
                <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-0">
                  <h6 className="text-uppercase fw-bold">Online Shoe Store</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px", backgroundColor: "black", height: "2px" }} />
                  <p>
                  We have shoes that suits your style and which you’re proud to wear. From women to men.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Explore</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px", backgroundColor: "black", height: "2px" }} />
                  <p>
                    <a href="#!" className="text-dark">
                      Gents
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Ladies
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      New Arrivals
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Brands
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px", backgroundColor: "black", height: "2px" }} />
                  <p>
                    <a href="#!" className="text-dark">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Contact us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                        Terms & Conditions
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact us</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px", backgroundColor: "black", height: "2px" }} />
                  <p>
                    <i className="fas fa-home mr-3"></i> Sarasavi Asapuwa, Hapugala, Galle.
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> shavidika.ekanayake@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +94 703009910
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +94 774283519
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            
            <a className="text-dark" href="/">
               @online_shoe_store.lk
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
