import React, { Component } from "react";
import { Link } from "react-router-dom";

class IntroComponent extends Component {
  state = {};
  render() {
    const mystyle = {
      "max-height": "30vh",
    };
    return (
      <div>
        <div class="px-4 pt-5 my-5 text-center border-bottom">
          <h1 class="display-4 fw-bold">Centered screenshot</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <div className="col-6">
                <button className="main-btn">
                  Donate Today <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="overflow-hidden" style={mystyle}>
            <div class="container px-5">
              <img
                src="template/assets/img/blog/blog-details.jpg"
                class="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12">
            <div className="blog-post-details">
              {/* <div className="post-thumbnail">
              <img
                src="template/assets/img/blog/blog-details.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div> */}
              <div className="post-content">
                <h3 className="title">
                  Live Stream From Awwwards Berlin Showcasing Was Trends Design
                  China Money Dating
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <blockquote>
                  <p>
                    Smashing Podcast Episode Pauloag Conve Optimization Seen
                    Inspired Design Decisions Getting Connected
                  </p>
                  <cite>Bailey Dobson</cite>
                </blockquote>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour when our power of choice untrammelled and when
                  nothing prevents our being able to what we like best every
                  pleasure is to be welcomed and every pain avoided in certain
                  circumstances
                </p>
                <div className="post-footer mt-40">
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <div className="related-tags">
                        <span>Related Tags: </span>
                        <a href="#">agency</a>
                        <a href="#">funding</a>
                        <a href="#">donate</a>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="social-share">
                        <span>Share: </span>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="post-author">
                    <div className="author-img">
                      <img
                        src="assets/img/author-thumbs/post-author.jpg"
                        alt="Image"
                      ></img>
                    </div>
                    <div className="author-info">
                      <h4 className="name">Jeremy D. Schalk</h4>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms
                      </p>
                      <ul className="author-social-links mt-25">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-nav mt-50">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="post-nav-item prev-post">
                          <div className="thumb">
                            <img
                              src="assets/img/blog/prev-post.jpg"
                              alt="Image"
                            ></img>
                            <i className="far fa-arrow-left"></i>
                          </div>
                          <div className="content">
                            <a href="#">Seamless Spreadshet Import Experie</a>
                            <span>
                              <i className="far fa-calendar-alt"></i> 25 May
                              2021
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="post-nav-item next-post">
                          <div className="thumb">
                            <img
                              src="assets/img/blog/next-post.jpg"
                              alt="Image"
                            ></img>
                            <i className="far fa-arrow-right"></i>
                          </div>
                          <div className="content">
                            <a href="#">Lessons Learned Big App Case Study</a>
                            <span>
                              <i className="far fa-calendar-alt"></i> 25 May
                              2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comments-template">
                    <h4 className="template-title">Peopel Comments</h4>
                    <ul className="comments-list">
                      <li>
                        <div className="comment-body">
                          <div className="commentator-img">
                            <img
                              src="assets/img/author-thumbs/commet-01.jpg"
                              alt="Author"
                            ></img>
                          </div>
                          <div className="comment-content">
                            <h5 className="commentator">John F. Medina</h5>
                            <span className="date">25 May 2021</span>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem doloremque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                        <ul className="children">
                          <li>
                            <div className="comment-body">
                              <div className="commentator-img">
                                <img
                                  src="assets/img/author-thumbs/commet-02.jpg"
                                  alt="Author"
                                ></img>
                              </div>
                              <div className="comment-content">
                                <h5 className="commentator">
                                  Jeffrey T. Kelly
                                </h5>
                                <span className="date">25 May 2021</span>
                                <p>
                                  Perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium
                                </p>
                                <a href="#" className="reply-link">
                                  Reply{" "}
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment-body">
                          <div className="commentator-img">
                            <img
                              src="assets/img/author-thumbs/commet-03.jpg"
                              alt="Author"
                            ></img>
                          </div>
                          <div className="comment-content">
                            <h5 className="commentator">Richard B. Zellmer</h5>
                            <span className="date">25 May 2021</span>
                            <p>
                              Unde omnis iste natus error sit voluptate
                              accusantium dolore mque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroComponent;
