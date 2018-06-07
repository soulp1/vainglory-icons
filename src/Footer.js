import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="container-fluid text-center mt-5 pt-5 header-and-footer">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-7 col-md-7 col-lg-3 mb-5">
            <div className="fa-3x">
              <span className="fa-layers fa-fw">
                <i
                  className="fas fa-bug text-light-gray"
                  data-fa-transform="shrink-8"
                />
                <i className="fas fa-ban text-red" />
              </span>
            </div>
            <h4>Find a Bug?</h4>
            <hr className="border-secondary" />
            <p className="small text-muted">
              This is an on-going work-in-progress set of tools to help test
              &amp; maintain a JSON database containing all data on display here
              for any web/app developers or game analysts/coaches in our
              community to use!
            </p>
            <p className="small text-muted">
              If you find any bugs or issues, please find me on{" "}
              <a
                href="https://github.com/oberocks/"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              or{" "}
              <a
                href="https://twitter.com/smasharific"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>, and let me know!
            </p>
          </div>
          <div className="col-9 col-sm-7 col-md-7 col-lg-3 mb-5">
            <div className="fa-3x">
              <i className="fas fa-link text-light-gray" />
            </div>
            <h4>Vainglory Links</h4>
            <hr className="border-secondary" />
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.vainglorygame.com/news/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vainglory Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.vaingloryfire.com/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VaingloryFire.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/vainglorygame/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vainglory Subreddit
                </a>
              </li>
              <li>
                <a
                  href="https://vgforums.net/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VG Forums
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9 col-sm-7 col-md-7 col-lg-3 mb-5">
            <div className="fa-3x">
              <i className="fas fa-code text-light-gray" />
            </div>
            <h4>Project Dev Tools</h4>
            <hr className="border-secondary" />
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://getbootstrap.com/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootstrap (4.0.0)
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React.js
                </a>
              </li>
              <li>
                <a
                  href="https://fonts.google.com/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Fonts
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FontAwesome 5
                </a>
              </li>
              <li>
                <a
                  href="https://jakearchibald.github.io/svgomg/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVGOMG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
