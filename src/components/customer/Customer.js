import React from "react";

const Customer = ({ gray }) => {
  return (
    <>
      {gray ? (
        <div className="customer-section pb-120 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <ul className="customer-logos-grid text-center list-unstyled mb-0">
                  <li>
                    <img
                      src="assets/img/clients/client-logo-1.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/clients/client-logo-2.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/clients/client-logo-3.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/clients/satschel-logo.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                </ul>
                <p
                  className="text-center mt-5 mb-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Trusted More than 25,00+ Companies Around the World
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="customer-section bg-white pb-120 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <ul className="customer-logos-grid text-center list-unstyled mb-0">
                  <li>
                    <a
                      href="https://app.sparrowmarketing.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="assets/img/clients/sparrow-logo.svg"
                        width="150"
                        alt="clients logo"
                        className="img-fluid
                      customer-logo-gray
                      p-1 p-md-2 p-lg-3 m-auto"
                        data-aos="fade-up"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://app.stg.nich.nixet.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="assets/img/clients/nich-logo.svg"
                        width="150"
                        alt="clients logo"
                        className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                        data-aos="fade-up"
                        data-aos-delay="50"
                      />
                    </a>
                  </li>
                  <li>
                    <img
                      src="assets/img/clients/proclinic-logo.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/clients/satschel-logo.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Customer;
