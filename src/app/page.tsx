"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../app/globals.css";
import AOS from "aos";
import { useEffect } from "react";
import "animate.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <main>
      <section className="banner">
        <div className="container align-items-center animate__animated animate__fadeInLeft">
          <div className="row one">
            <div className="col-md-6 column-element">
              <h1>Self-service Bioinformatics Platform</h1>
              <div className="btn-toolbar btn-group" role="toolbar">
                <span className="button-click btn-click" data="fast">
                  10x faster research
                </span>
                <span className="button-click btn-click">30% lower cost</span>
                <span className="button-click btn-click">
                  5x research productivity
                </span>
              </div>
              <p>
                With Quark, run your
                <img
                  src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/snakee.png?w=750&ssl=1"
                  className="inner-image"
                />
                Pipeline in any
                <img
                  src="	https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-15.png?w=750&ssl=1"
                  className="inner-image"
                />
                Cloud <br />
                using any
                <img
                  src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-11-1.png?w=750&ssl=1"
                  className="inner-image"
                />
                Compute with Zero DevOps.
              </p>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn-one">
                  Request Demo
                </button>
                <button type="button" className="btn-two">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="container">
          <div className="row two">
            <div className="col-md-12 ">
              <h2
                className="text-center head-element"
                style={{ color: "#1C0732" }}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Accelerate Scientific Research through Self Service Computing
                Platform
              </h2>
            </div>

            <div className="row  d-flex  flex-wrap align-items-stretch ">
              <div className="col-md-4 ">
                <div
                  className="card element-one d-flex flex-column h-100 all-cards"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <img
                    className="card-img-top  image-element p-0"
                    src="https://invisibl.io/wp-content/uploads/2023/11/Figure-→-makostudios_scientific_discoveries_on_a_lab_illustration_style__64668e8a-5266-41c5-aecf-24ff3eca63c0.png.svg"
                    alt="Card image"
                  />
                  <div className="card-body p-0">
                    <h5 className="card-title title-cards text-white">
                      Accelerate Scientific Discoveries
                    </h5>
                    <p className="card-text  text-white first-p-element">
                      Take your Scientific Pipelines from idea to production
                      through a self service platform for building and running
                      pipelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div
                  className="card element-one d-flex flex-column h-100 all-cards"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img
                    className="card-img-top  image-element p-0"
                    src="https://invisibl.io/wp-content/uploads/2023/11/fg-10.svg"
                    alt="Card image"
                  />
                  <div className="card-body p-0">
                    <h5 className="card-title title-cards text-white">
                      Lower barrier for Cloud Infrastructure
                    </h5>
                    <p className="card-text  text-white second-p-element">
                      Get immediate access to Cloud Infrastructure for executing
                      your pipelines without being throttled by access to
                      Infrastructure and Tools. No more waiting on tickets &
                      queues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div
                  className="card element-one d-flex flex-column h-100 all-cards"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <img
                    className="card-img-top  image-element p-0"
                    src="https://invisibl.io/wp-content/uploads/2023/11/fg-10.svg"
                    alt="Card image"
                  />
                  <div className="card-body p-0">
                    <h5 className="card-title title-cards text-white">
                      End to End Platform for scientific workflows
                    </h5>
                    <p className="card-text  text-white first-p-element ">
                      An end-to-end platform for building & executing pipelines,
                      access & visualize results and collaborate with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="head-element text-center"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                One central platform for running all your pipelines
              </h2>
            </div>
            <div className="col-md-4">
              <div
                className="card card-container"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="card-header text-center green-card-header">
                  <h6 className="card-title title-element">Any Pipeline</h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item text-center border-0 ">
                      <img
                        src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-6.png?fit=258%2C42&ssl=1"
                        className="card-img-top card-elmt one"
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/snakee.png?w=334&ssl=1"
                        className="card-img-top card-elmt two"
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/Group-1000002366.png?fit=346%2C72&ssl=1"
                        className="card-img-top card-elmt three"
                        alt="Placeholder Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card card-container"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="card-header text-center green-card-header">
                  <h6 className="card-title title-element">Any Compute</h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item text-center border-0 ">
                      <img
                        src="	https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-11-1.png?w=318&ssl=1"
                        className="card-img-top card-elmt four"
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="https://invisibl.io/wp-content/uploads/2023/11/Group-1000002341.svg"
                        className="card-img-top card-elmt five "
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="https://invisibl.io/wp-content/uploads/2023/11/Group-1000002377.svg"
                        className="card-img-top card-elmt six"
                        alt="Placeholder Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card card-container"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="card-header text-center green-card-header">
                  <h6 className="card-title title-element">Any Cloud</h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item text-center border-0">
                      <img
                        src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-14.png?fit=156%2C98&ssl=1"
                        className="card-img-top card-elmt seven"
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="	https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-15.png?w=382&ssl=1"
                        className="card-img-top card-elmt eight"
                        alt="Placeholder Image"
                      />
                    </li>
                    <li className="list-group-item text-center border-0">
                      <img
                        src="	https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/image-16.png?fit=234%2C70&ssl=1"
                        className="card-img-top card-elmt nine"
                        alt="Placeholder Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-content-center first-div">
            <div className="col-md-4 ">
              <div
                className="card element-card-four"
                data-aos="fade-down-right"
                data-aos-duration="2500"
              >
                <div className="card-header text-center bg-transparent p-3">
                  <h2>Quark for Wet Lab Scientists</h2>
                </div>
                <div
                  className="image-element "
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <img
                    src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/Lab-based.png?resize=1024%2C904&ssl=1"
                    className="card-img-top m-0 img-head"
                    alt="Placeholder Image"
                  />
                </div>
                <div className="card-footer ">
                  <p className="para-elements">
                    Intuitive, web-based, no-code analysis platform to run,
                    visualize, and analyze scientific workflows with 1-click. No
                    IT skills required.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card  element-card-four"
                data-aos="fade-down-left"
                data-aos-duration="2500"
              >
                <div className="card-header text-center bg-transparent p-3">
                  <h2>Quark for Dry Lab Scientists</h2>
                </div>
                <div
                  className="image-element "
                  data-aos="flip-down"
                  data-aos-duration="2000"
                >
                  <img
                    src="https://i0.wp.com/invisibl.io/wp-content/uploads/2023/11/botechnologist.png?resize=1024%2C905&ssl=1"
                    className="card-img-top m-0 img-head"
                    alt="Placeholder Image"
                  />
                </div>
                <div className="card-footer two">
                  <p className="para-elements">
                    Self-service platform to rapidly build reproducible,
                    workflow-agnostic pipelines with on-demand workspaces,
                    compute, and datasets. ZERO DevOps intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row d-flex justify-content-center second-div "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="col-md-3 p-0">
              <div className="card">
                <div className="card-header text-center p-0 m-0">
                  <h6 className="head6 m-0">Day 0</h6>
                </div>
                <div className="card-body body-elements">
                  <p className="m-0">
                    Deploy Quark and Run 100s of pre-built pipelines
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-1 d-flex align-content-center p-0">
              <img src="https://invisibl.io/wp-content/uploads/2023/11/Line-718.svg" />
            </div>

            <div className="col-md-3 p-0">
              <div className="card">
                <div className="card-header text-center p-0 m-0">
                  <h6 className="head6 m-0">Day 1</h6>
                </div>
                <div className="card-body body-elements">
                  <p className="m-0">
                    Bring existing pipelines (Nextflow, Snakemake, Custom)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-1 d-flex align-content-center p-0">
              <img src="https://invisibl.io/wp-content/uploads/2023/11/Line-718.svg" />
            </div>

            <div className="col-md-3 p-0">
              <div className="card">
                <div className="card-header text-center p-0 m-0">
                  <h6 className="head6 m-0">Day 2</h6>
                </div>
                <div className="card-body body-elements">
                  <p className="m-0">
                    Build New Pipelines through Visual Builder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
