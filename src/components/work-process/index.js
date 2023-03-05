import React, { Fragment } from "react";

const Methodology = [
  {
    id: 1,
    head: "Sprint Planning",
    desc: "The team chooses backlog items based on priority and what they believe they can complete in the sprint.",
  },
  {
    id: 2,
    head: "Daily Stand-Up",
    desc: "Daily meeting where each team member briefly reports their progress since yesterday, plans for today, and anything impeding their progress.",
  },
  {
    id: 3,
    head: "Iteration Review",
    desc: `The team demonstrates what they've accomplished to stakeholders. They demo the software and show its value.`,
  },
  {
    id: 4,
    head: "Retrospective",
    desc: "The team takes time to reflect on what went well and which areas need improvement.",
  },
];

const WorkProcessFour = () => {
  return (
    <>
      <section className="work-process ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h4 className="h5 text-primary">Work Process</h4>
                <h2>We Follow Agile Methodology</h2>
                <p>
                  Iterative approach to managing software development projects
                  that focuses on continuous releases and incorporating customer
                  feedback with every iteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {Methodology.map((item) => (
              <Fragment key={item.id}>
                {item.id !== 1 && <div className="dots-line first"></div>}
                <div className="col-md-6 col-lg-3">
                  <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0 cardHover">
                    <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                      <span className="h2 mb-0 text-primary fw-bold">
                        {item.id}
                      </span>
                    </div>
                    <h3 className="h5">{item.head}</h3>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessFour;
