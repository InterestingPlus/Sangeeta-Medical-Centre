import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ image, title, page }) => {
  return (
    <div
      className="page-header about-page-header bg-radius-section parallaxie"
      style={{
        backgroundImage: `url('${image}')`,
        // backgroundPosition: "-20% center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box" style={{ background: "none" }}>
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
