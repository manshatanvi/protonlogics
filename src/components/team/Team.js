import React from "react";
import { Employees } from "../../constants";

const Team = () => {
  return (
    <>
      <section id="our-team" className="team-section pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-heading text-center">
                <h5 className="h6 text-primary">Our Team</h5>
                <h2>The People Behind Protonlogics</h2>
                <p>
                  Our team consist of only the best talents
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {Employees.map((employee) => (
              <div className="col-lg-3 col-md-6 team-single-contain" key={employee.employeeId}>
                <div className="team-single-wrap mb-5">
                  <div className="team-img rounded-custom">
                    <img
                      src={employee.img}
                      alt={employee.name}
                      className="img-fluid position-relative"
                    />
                    <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                      {employee.socials.map((social) => (
                        <li className="list-inline-item" key={social.url}>
                          <a href={social.url} target="_blank" rel="noreferrer">
                            <i className={social.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="team-info mt-4 text-center">
                    <h5 className="h6 mb-1">{employee.name}</h5>
                    <p className="text-muted small mb-0">
                      {employee.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
