import { Link } from 'react-router-dom';
import { 
    creativeTeam,
    development,
    workChat,
    team1,
    team2,
    team3,
    team4,
    team5,
    team6, } from '../../../components/common/ImageLoader';


const About = () => {
    return (
        <>
            <div className="section pt-3 pt-lg-5 px-2 px-lg-4" id="about">
                    <div className="container">
                        <div className="row py-3 py-lg-5">
                            <div className="col-lg-6 col-md-5 px-3 order-md-last" data-aos="fade-zoom-in" data-aos-delay="50"
                                data-aos-easing="ease-in-back"><img className="my-3 img-fluid" src={development}
                                    alt="development" /></div>
                            <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
                                <div className="h3 mb-2">Our <strong>AI Powered</strong> platform understand and serve your needs.</div>
                                <p className="text-secondary mb-3">Our AI-powered platform is designed to understand and serve your needs in a
                                    more efficient and personalized way. By leveraging the latest advancements in artificial intelligence
                                    and machine learning, we are able to analyze vast amounts of data and provide insights that
                                    would be impossible to obtain through traditional methods.

                                    Our platform is also designed to learn from your behaviors and preferences, allowing it to make
                                    increasingly accurate predictions and recommendations over time. This means that the more you use our
                                    platform, the more personalized and effective it becomes at serving your specific needs.

                                    Whether you are looking to streamline your operations, improve customer engagement, or optimize your
                                    marketing efforts, our AI-powered platform is here to help. By understanding your unique needs and
                                    providing tailored solutions, we are committed to helping you achieve your goals and drive business
                                    success.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mb-2">
                                <div className="border border-3 rounded px-2 py-2 d-flex align-items-center">
                                    <div className="badge bg-success me-2"><i className="fas fa-check"></i></div>
                                    <div className="text-secondary fw-bold">Personalized</div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-2">
                                <div className="border border-3 rounded px-2 py-2 d-flex align-items-center">
                                    <div className="badge bg-success me-2"><i className="fas fa-check"></i></div>
                                    <div className="text-secondary fw-bold">Efficient</div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-2">
                                <div className="border border-3 rounded px-2 py-2 d-flex align-items-center">
                                    <div className="badge bg-success me-2"><i className="fas fa-check"></i></div>
                                    <div className="text-secondary fw-bold">Insightful</div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-2">
                                <div className="border border-3 rounded px-2 py-2 d-flex align-items-center">
                                    <div className="badge bg-success me-2"><i className="fas fa-check"></i></div>
                                    <div className="text-secondary fw-bold">Innovative</div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-3 py-lg-5">
                            <div className="col-lg-6 col-md-5 px-3" data-aos="fade-zoom-in" data-aos-delay="50"
                                data-aos-easing="ease-in-back"><img className="my-3 img-fluid" src={creativeTeam}
                                    alt="creative-team" /></div>
                            <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
                                <div className="h3 mb-2">Power up your <strong>Marketing</strong> game reach your audience, anytime, anywhere!
                                </div>
                                <p className="text-secondary mb-2">Experience the power of a complete marketing solution with our wide range
                                    of services, including SMS, email, PPC, affiliate marketing, content marketing, and social media
                                    management. From generating leads to driving sales, we've got you covered with a comprehensive suite of
                                    tools designed to maximize your marketing impact and help you achieve your business goals. With our
                                    cutting-edge technology, we'll help you connect with your audience across all channels
                                    and deliver personalized, engaging experiences that drive real results. Discover the full potential of
                                    your marketing strategy and take your business to new heights with our all-in-one marketing solution.
                                </p>
                                <div>
                                    <div className="py-1">
                                        <div className="d-flex text-small fw-bolder"><span className="me-auto">SMS</span><span>90%</span></div>
                                        <div className="progress my-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right"
                                                data-aos-delay="300" data-aos-anchor=".skills-section" style={{ width: '90%' }} aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="py-1">
                                        <div className="d-flex text-small fw-bolder"><span className="me-auto">Email</span><span>90%</span></div>
                                        <div className="progress my-1">
                                            <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                                                data-aos-delay="400" data-aos-anchor=".skills-section" style={{ width: '90%' }} aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="py-1">
                                        <div className="d-flex text-small fw-bolder"><span className="me-auto">Content/Graphic</span><span>80%</span>
                                        </div>
                                        <div className="progress my-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right"
                                                data-aos-delay="500" data-aos-anchor=".skills-section" style={{ width: '80%' }} aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">Social
                      Media</span><span>75%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                      data-aos-delay="600" data-aos-anchor=".skills-section" style={{width:'75%'}} aria-valuenow="75"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">Pay Per Click</span><span>70%</span>
                  </div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right"
                      data-aos-delay="600" data-aos-anchor=".skills-section" style={{width:'70%'}} aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">Affiliate</span><span>65%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                      data-aos-delay="600" data-aos-anchor=".skills-section" style={{width:'60%'}} aria-valuenow="65"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>  */}
                                    <div className="py-1">
                                        <div className="d-flex text-small fw-bolder"><span className="me-auto">Legacy</span><span>95%</span></div>
                                        <div className="progress my-1">
                                            <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                                                data-aos-delay="600" data-aos-anchor=".skills-section" style={{ width: '95%' }} aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-narrow">
                        <div className="text-center mb-4">
                            <h2 className="marker marker-center">Work With Us</h2>
                        </div>
                        <div className="text-center">
                            <p className="mx-auto mb-3" style={{ maxWidth: "800px" }}>Leverage agile frameworks to provide a robust synopsis for
                                high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further
                                the overall value proposition.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">
                                <div className="border rounded p-3 bg-light mb-3">
                                    <div className="text-center text-secondary display-3"><i className="bi bi-chat-left-text-fill"></i></div>
                                    <h3 className="h4 mt-2">Flexibility</h3>
                                    <p className="text-small">Our platform is designed to be flexible and adaptable to the needs of your
                                        business. We use agile methodologies to ensure that our platform is always evolving and improving to
                                        meet the changing needs of the market.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="border rounded p-3 bg-light mb-3">
                                    <div className="text-center text-secondary display-3"><i className="bi bi-people-fill"></i></div>
                                    <h3 className="h4 mt-2">Collaboration</h3>
                                    <p className="text-small">We believe in the power of collaboration and teamwork. Our platform is designed to
                                        foster collaborative thinking and communication, allowing teams to work together more effectively and
                                        achieve better results.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="border rounded p-3 bg-light mb-3">
                                    <div className="text-center text-secondary display-3"><i className="bi bi-palette-fill"></i></div>
                                    <h3 className="h4 mt-2">Innovation</h3>
                                    <p className="text-small">We are always pushing the boundaries of what is possible with our platform. By
                                        leveraging agile frameworks, we are able to quickly test and iterate new ideas, allowing us to stay
                                        ahead of the curve and provide our clients with the latest and greatest technology solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="400">
                                <div className="border rounded p-3 bg-light mb-3">
                                    <div className="text-center text-secondary display-3"><i className="bi bi-calendar-check-fill"></i></div>
                                    <h3 className="h4 mt-2">Results</h3>
                                    <p className="text-small">Ultimately, we are focused on delivering results for our clients. Whether you are
                                        looking to increase sales, improve customer engagement, or streamline your operations, our platform
                                        leverages agile frameworks to help you achieve your goals quickly and effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row py-3 py-lg-5">
                            <div className="col-lg-6 col-md-5 px-3 order-md-last" data-aos="fade-zoom-in" data-aos-delay="50"
                                data-aos-easing="ease-in-back"><img className="my-3 img-fluid" src={workChat}
                                    alt="work-chat" /></div>
                            <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
                                <div className="h3 mb-2">We believe in <strong>Long Term Partnership</strong>.</div>
                                <p className="text-secondary mb-3">Building lasting success through strong, collaborative partnerships - Join
                                    us for a journey towards growth and success!</p>
                                <ul className="nav nav-tabs nav-fill" role="tablist">
                                    <li className="nav-item" role="presentation"><Link className="nav-link p-1 active" aria-current="page"
                                        to="#experience" data-bs-toggle="tab"><span className="badge bg-secondary me-1">1</span>
                                        Experience</Link></li>
                                    <li className="nav-item" role="presentation"><Link className="nav-link p-1" to="#flexibility"
                                        data-bs-toggle="tab"><span className="badge bg-secondary me-1">2</span> Flexibility</Link></li>
                                    <li className="nav-item" role="presentation"><Link className="nav-link p-1" to="#results"
                                        data-bs-toggle="tab"><span className="badge bg-secondary me-1">3</span> Results</Link></li>
                                </ul>
                                <div className="tab-content border border-top-0 text-secondary p-3" id="myTabContent">
                                    <div className="tab-pane fade show active" id="experience" role="tabpanel" aria-labelledby="home-tab">
                                        <p>Experience the force of technology in marketing we believe that the right technology can be a
                                            game-changer for businesses of all sizes.</p>
                                        <p>By joining our platform, our clients can leverage the
                                            latest advancements in AI and machine learning to supercharge their marketing efforts and achieve
                                            their goals faster and more efficiently.</p>
                                    </div>
                                    <div className="tab-pane fade" id="flexibility" role="tabpanel" aria-labelledby="profile-tab">
                                        <p>Flexibility in payment plans We believe that every business is unique, and that's why we offer
                                            flexible payment plans to meet the needs of freelancers, small businesses, and large organizations
                                            alike.</p>
                                        <p>Our payment plans are designed to be transparent, affordable, and scalable, so our clients
                                            can focus on growing their business without worrying about budget constraints.</p>
                                    </div>
                                    <div className="tab-pane fade" id="results" role="tabpanel" aria-labelledby="contact-tab">
                                        <p>Results you can see We believe that our clients' success is our success. That's why we are
                                            committed to delivering measurable results that our clients can see and track over time.</p>
                                        <p>By
                                            leveraging our AI-powered platform, our clients can optimize their marketing campaigns, improve
                                            customer engagement, and drive revenue growth, all while building long-term partnerships with our
                                            team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section pt-5 pb-3 py-lg-5 px-2 px-lg-4" id="team">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="marker marker-center">Meet our Team</h2>
                        </div>
                    </div>
                    <div className="carousel carousel-dark slide pb-3" id="carouselTeam" data-bs-ride="carousel" data-aos="zoom-in-up">
                        <div className="container-narrow">
                            <ol className="carousel-indicators">
                                <li className="active" data-bs-target="#carouselTeam" data-bs-slide-to="0" aria-label="Slide 1"></li>
                                <li data-bs-target="#carouselTeam" data-bs-slide-to="1" aria-label="Slide 2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="6000">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team1} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">Pamela Lopez</div>
                                                    <div className="text-muted mb-1">CEO</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team2} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">John Bowman</div>
                                                    <div className="text-muted mb-1">Graphic Designer</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team3} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">Mark Shaw</div>
                                                    <div className="text-muted mb-1">Software Developer</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team4} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">Melissa Long</div>
                                                    <div className="text-muted mb-1">Software Developer</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team5} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">Betty West</div>
                                                    <div className="text-muted mb-1">Software Developer</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card d-block mb-3"><img className="card-img-top" src={team6} alt="image" />
                                                <div className="card-body text-center">
                                                    <div className="h5 mb-1">Jeremy Little</div>
                                                    <div className="text-muted mb-1">Digital Marketing</div>
                                                    <div className="nav text-light justify-content-center"><Link className="nav-link" to="#!" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></Link><Link className="nav-link" to="#!" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></Link><Link className="nav-link" to="#!" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></Link><Link className="nav-link" to="#!" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About