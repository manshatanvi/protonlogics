import React from 'react';

const ContactFormTwo = () => {
  return (
    <>
      <section
        className="contact-us-form pt-60 pb-120"
        style={{
          background:
            "url('assets/img/shape/contact-us-bg.svg')no-repeat center bottom",
        }}
      >
        <div className="container">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Have a project in mind? We’d love to hear about it</h2>
              <p>
                Collaboratively promote client-focused convergence vis-a-vis
                customer directed alignments via standardized infrastructures.
              </p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    I'm Interested in <span className="text-danger">*</span>
                  </label>
                  <ul className="list input-group mb-3">
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="web development"
                        id="web-development"
                        className="pill-checkbox"
                      />
                      <label for="web-development" className="pill-checkbox__label">
                        <span className="overflow-span">
                          <span className="text-span" data-text="Web Development">
                            Web Development
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="app development"
                        id="app-development"
                        className="pill-checkbox"
                      />
                      <label for="app-development" className="pill-checkbox__label">
                        <span className="overflow-span">
                          <span className="text-span" data-text="App Development">
                            App Development
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="Blockchain"
                        id="blockchain"
                        className="pill-checkbox"
                      />
                      <label for="blockchain" className="pill-checkbox__label">
                        <span className="overflow-span">
                          <span className="text-span" data-text="Blockchain">
                            Blockchain
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="devops"
                        id="devops"
                        className="pill-checkbox"
                      />
                      <label for="devops" className="pill-checkbox__label">
                        <span className="overflow-span">
                          <span className="text-span" data-text="DevOps">
                            DevOps
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="product design"
                        id="product-design"
                        className="pill-checkbox"
                      />
                      <label for="product-design" className="pill-checkbox__label">
                        <span className="overflow-span">
                          <span className="text-span" data-text="Product Design">
                            Product Design
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="list__item">
                      <input
                        type="checkbox"
                        name="digital marketing"
                        id="digital-marketing"
                        className="pill-checkbox"
                      />
                      <label
                        for="digital-marketing"
                        className="pill-checkbox__label"
                      >
                        <span className="overflow-span">
                          <span className="text-span" data-text="Digital Marketing">
                            Digital Marketing
                          </span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    First name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                    Last name
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="contact" className="mb-1">
                    Contact <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      required
                      placeholder="Contact"
                      aria-label="Contact"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    Tell us about your project
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      id="yourMessage"
                      required
                      placeholder="How can we help you?"
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormTwo;
