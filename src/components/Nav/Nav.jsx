import React from "react";
export default function Nav() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0"
                style={{ backgroundColor: "#ffff" }}
            >
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="#"
                        style={{
                            marginRight: "60px",
                        }}
                    >
                        bootStim
                    </a>
                    <button
                        className="navbar-toggler ps-0"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col-md-8 navname">
                                        <a className="nav-link" href="#!">
                                            Service
                                        </a>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col-md-8 navname">
                                        <a className="nav-link" href="#!">
                                            Agency
                                        </a>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col-md-8 navname">
                                        <a className="nav-link" href="#!">
                                            CaseStudy
                                        </a>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col-md-8 navname">
                                        <a className="nav-link" href="#!">
                                            Resources
                                        </a>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col-md-8 navname">
                                        <a className="nav-link" href="#!">
                                            Contact
                                        </a>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#!">
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black",
                                            border: "1px solid black",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#!">
                                    <button
                                        className="btn btn-dark"
                                        style={{
                                            borderRadius: "80px",
                                        }}
                                    >
                                        <i class="fa fa-bell" aria-hidden="true"></i>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
