import { Link } from 'react-router-dom';
import { 
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6 } from '../../../components/common/ImageLoader';

const TNC = () => {
    return (
        <>
            {/*  <div className="section py-3 py-lg-5 px-2 px-lg-4" id="portfolio">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="marker marker-center">Portfolio </h2>
          </div>
          <div className="grid bp-gallery pb-3" data-aos="zoom-in-up" data-aos-delay="100">
            <div className="grid-sizer"></div>
            <div className="grid-item"><Link to="https://dribbble.com">
                <figure className="portfolio-item"><img src="images/portfolio/1-small.png"
                    data-bp="images/portfolio/1.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">Web Design</h4>
                    <div>Dribbble.com</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://github.com">
                <figure className="portfolio-item"><img src="images/portfolio/2-small.png" data-bp="images/portfolio/2.jpg"
                    data-caption="Example of an optional caption." />
                  <figcaption>
                    <h4 className="h5 mb-0">Web Development</h4>
                    <div>GitHub.com</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://soundcloud.com/">
                <figure className="portfolio-item"><img src="images/portfolio/3-small.png" data-bp="images/portfolio/3.jpg"
                    data-caption="Example of an optional caption." />
                  <figcaption>
                    <h4 className="h5 mb-0">Audio Mixing</h4>
                    <div>Soundcloud.com</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://www.adobe.com/">
                <figure className="portfolio-item"><img src="images/portfolio/4-small.png"
                    data-bp="images/portfolio/4.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">Video Editing</h4>
                    <div>Adobe After Effects</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://www.adobe.com/">
                <figure className="portfolio-item"><img src="images/portfolio/5-small.png"
                    data-bp="images/portfolio/5.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">Photography</h4>
                    <div>Adobe Photoshop</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://www.android.com/">
                <figure className="portfolio-item"><img src="images/portfolio/6-small.png"
                    data-bp="images/portfolio/6.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">App Development</h4>
                    <div>Android</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://flutter.dev/">
                <figure className="portfolio-item"><img src="images/portfolio/7-small.png"
                    data-bp="images/portfolio/7.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">App Design</h4>
                    <div>Flutter</div>
                  </figcaption>
                </figure>
              </Link></div>
            <div className="grid-item"><Link to="https://flutter.dev/">
                <figure className="portfolio-item"><img src="images/portfolio/8-small.png"
                    data-bp="images/portfolio/8.jpg" />
                  <figcaption>
                    <h4 className="h5 mb-0">App Development</h4>
                    <div>Flutter</div>
                  </figcaption>
                </figure>
              </Link></div>
          </div>
        </div>
      </div> */}
                <div className="section py-3 py-lg-5 px-2 px-lg-4" id="testimonials">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="marker marker-center">Client Testimonials</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5" data-aos="fade-right" data-aos-delay="100">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span className="m-2">As a
                                    small business owner, I don't have a lot of time to devote to marketing. FilterArray has been a
                                    game-changer for me - their platform is easy to use and their AI algorithms have helped me to reach a
                                    wider audience and generate more leads. I highly recommend FilterArray to any business owner looking
                                    to take their marketing to the next level.</span></div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">Sarah Johnson</div>
                                        <div className="text-small">CEO / Johnson & Co</div>
                                    </div><img className="me-md-3 rounded" src={testimonial1} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-5" data-aos="fade-left" data-aos-delay="300">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span
                                    className="m-2">FilterArray has completely transformed our marketing efforts. Their platform's AI
                                    capabilities have allowed us to better understand our customers' needs and preferences, resulting in
                                    more targeted and effective campaigns. We've seen a significant increase in engagement and ROI since
                                    working with FilterArray.</span></div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">David Lee</div>
                                        <div className="text-small">Marketing Manager / Acme Inc</div>
                                    </div><img className="me-md-3 rounded" src={testimonial2} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-5" data-aos="fade-left" data-aos-delay="300">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span
                                    className="m-2">FilterArray's marketing platform is simply amazing. Their tools are intuitive, easy to
                                    use, and incredibly powerful. We have seen a significant improvement in our email open and
                                    click-through rates since implementing their platform, and we are now able to better track and analyze
                                    the performance of our campaigns. We highly recommend FilterArray to anyone looking to take their
                                    marketing efforts to the next level.</span>
                                </div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">Emily Nguyen</div>
                                        <div className="text-small">Marketing Director / BrightByte</div>
                                    </div><img className="me-md-3 rounded" src={testimonial3} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-5" data-aos="fade-left" data-aos-delay="300">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span
                                    className="m-2">FilterArray's marketing platform has been a game-changer for our business. Their
                                    AI-powered tools have helped us streamline our marketing efforts and achieve better results in less
                                    time. We are impressed with the platform's ability to provide personalized insights and
                                    recommendations that have helped us optimize our campaigns and drive higher engagement rates.</span>
                                </div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">Jason Chen</div>
                                        <div className="text-small">Founder / Chen Enterprises</div>
                                    </div><img className="me-md-3 rounded" src={testimonial4} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-5" data-aos="fade-left" data-aos-delay="300">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span className="m-2">We have
                                    been using FilterArray's marketing platform for several months now, and we couldn't be happier with
                                    the results. Their platform has helped us reach new audiences and generate more leads, while also
                                    providing us with valuable insights into our customers' behaviors and preferences. Their customer
                                    service is also top-notch, and they have been incredibly responsive and helpful throughout the entire
                                    process.</span>
                                </div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">Brian Patel</div>
                                        <div className="text-small">Digital Marketing Specialist / Markoo</div>
                                    </div><img className="me-md-3 rounded" src={testimonial5} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-5" data-aos="fade-right" data-aos-delay="100">
                                <div className="d-flex ms-md-3"><span><i className="fas fa-2x fa-quote-left"></i></span><span
                                    className="m-2">FilterArray's platform has been a huge asset to our marketing team. The insights and
                                    recommendations provided by their AI algorithms have allowed us to make data-driven decisions and
                                    optimize our campaigns for better results. We've seen a significant improvement in our ROI since
                                    implementing FilterArray's platform.</span></div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <div className="text-end me-2">
                                        <div className="fw-bolder">Michelle Rodriguez</div>
                                        <div className="text-small">Owner / Rodriguez Enterprises</div>
                                    </div><img className="me-md-3 rounded" src={testimonial6} width="96" height="96"
                                        alt="client 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default TNC