import React from "react";
import { Link } from "react-router-dom";
import { questions } from "./Data";

const QuestionAnswer = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div
              className="accordion accordion-flush max-w-[950px] mx-auto relative"
              // id="accordionFlushExample"
            >
              {questions.map((elem) => (
                <div className="accordion-item my-7 ">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed bg-[#CCE5FF] font-workSans font-[600]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseThree${elem.Id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapseThree${elem.Id}`}
                    >
                      {elem.Question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseThree${elem.Id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body text-sm font-workSans">
                      {elem.Answer}
                    </div>
                  </div>
                </div>
              ))}

              <button className="absolute right-0">
                <Link to="/">View All</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuestionAnswer;
