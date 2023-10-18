import { useRecoilValue } from 'recoil';
import { blogAtom } from '../../../atoms';
import { Link } from 'react-router-dom';
import { waveBg,
    marker,
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    buildingWebsite,
    creativeTeam,
    development,
    hello1,
    hello2,
    hello3,
    hello4,
    websiteApp,
    workChat,
    workTogether,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6,
    team1,
    team2,
    team3,
    team4,
    team5,
    team6, webDesign,
    appDevelopment,
    graphicDesign,
    uiux,
    fullStack, } from '../../../components/common/ImageLoader';


const Homepage = () => {

    const blogs = useRecoilValue(blogAtom);

    return (
        <div className="page-content">
            <div id="content">
                <header>
                    <div className="cover bg-light">
                        <div className="container px-2">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mt-5 pt-lg-5">
                                        <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay="50">Your Success is Our Mission.
                                        </h1>
                                        <p className="lead fw-normal mt-4" data-aos="fade-up" data-aos-delay="100">Leverage agile frameworks to
                                            provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy
                                            foster collaborative thinking.</p>
                                        <div className="mt-3" data-aos="fade-up" data-aos-delay="200"><Link
                                            className="btn btn-primary shadow-sm mt-1 me-2" to="/register">Get Sarted <i
                                                className="fas fa-arrow-right ms-1"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 p-3 pe-lg-0" data-aos="fade-left" data-aos-delay="100"><img className="pt-2 img-fluid"
                                    src={buildingWebsite} alt="hello" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="wave-bg"></div>
                </header>
                <div className="section pt-3 pt-lg-5 px-2 px-lg-4" id="about">
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
                <div className="section py-3 py-lg-5 px-2 px-lg-4" id="clients">
                    <div className="container-narrow">
                        <div className="text-center mb-4">
                            <h2 className="marker marker-center">Trusted By</h2>
                        </div>
                        <div className="text-center">
                            <p className="mx-auto mb-3" style={{ maxWidth: '800px' }}>Collaboratively administrate empowered markets via
                                plug-and-play networks.</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in-up" data-aos-delay="100">
                            <div className="mx-auto mb-3"> <img className="p-1" src={client1} /><img className="p-1"
                                src={client2} /><img className="p-1" src={client3} /><img className="p-1"
                                    src={client4} /><img className="p-1" src={client5} /><img className="p-1"
                                        src={client6} /><img className="p-1" src={client7} /></div>
                        </div>
                    </div>
                </div>
                <div className="section bg-light py-3 py-lg-5 px-2 px-lg-4" id="services">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="marker marker-center">Our Services</h2>
                        </div>
                        <div className="text-center">
                            <p className="mx-auto mb-3" style={{ maxWidth: '800px' }}>Experience the power of AI-driven marketing and unlock your brand's potential with our innovative solutions.</p>
                        </div>
                        <div className="row py-3">
                            <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="100">
                                <div className="bg-white border rounded-circle d-inline-block p-2"><img className="p-2"
                                    src={appDevelopment} width="96" height="96" alt="SMS" /></div>
                                <div className="bg-white border rounded p-3 mt-n4">
                                    <div className="h5 mt-3">SMS Marketing</div>
                                    <p className="text-small">With SMS marketing, you can send targeted text messages to your customers' mobile
                                        phones, which can be highly effective for promotions, reminders, and other marketing messages. Our
                                        platform offers advanced features such as segmentation and automation, as well as detailed analytics
                                        to track the success of your campaigns.</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="200">
                                <div className="bg-white border rounded-circle d-inline-block p-2"><img className="p-2"
                                    src={webDesign} width="96" height="96" alt="Email" /></div>
                                <div className="bg-white border rounded p-3 mt-n4">
                                    <div className="h5 mt-3">Email Marketing</div>
                                    <p className="text-small">Email marketing is a powerful way to reach your audience and build relationships
                                        with your customers. Our platform provides an easy-to-use email builder, list management tools, and
                                        automation features to help you create and send targeted emails that drive engagement and sales.</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="bg-white border rounded-circle d-inline-block p-2"><img className="p-2"
                                    src={uiux} width="96" height="96" alt="ui-ux" /></div>
                                <div className="bg-white border rounded p-3 mt-n4">
                                    <div className="h5 mt-3">Content Marketing</div>
                                    <p className="text-small">Content marketing involves creating valuable, informative content that engages and
                                        educates your audience. Our platform offers a range of content marketing services, including content
                                        creation, blog management, social media management, and more, to help you build your brand and attract
                                        new customers</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="bg-white border rounded-circle d-inline-block p-2"><img className="p-2"
                                    src={fullStack} width="96" height="96" alt="ui-ux" /></div>
                                <div className="bg-white border rounded p-3 mt-n4">
                                    <div className="h5 mt-3">Legacy Marketing</div>
                                    <p className="text-small">While digital marketing is important, offline marketing can also be highly
                                        effective for building brand awareness and driving sales. Our platform offers a range of offline
                                        marketing services, including branding and logo design, merchandising and promotional products, and
                                        event planning and coordination, to help you reach your audience through a variety of channels.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section bg-secondary text-light py-3 py-lg-5 px-2 px-lg-4" id="stats">
                    <div className="container-narrow">
                        <div className="row px-4">
                            <div className="col-md-3 col-sm-6">
                                <div className="d-flex py-2"><i className="mr-3 fas fa-clipboard-check fa-4x fa-fw"></i>
                                    <div className="ms-1">
                                        <div className="h2 mb-1 purecounter" data-purecounter-start="0" data-purecounter-end="3025"
                                            data-purecounter-duration="1">3025</div>
                                        <div className="h6">Campaign Done</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="d-flex py-2"><i className="mr-3 fas fa-smile fa-4x fa-fw"></i>
                                    <div className="ms-1">
                                        <div className="h2 mb-1 purecounter" data-purecounter-start="0" data-purecounter-end="545"
                                            data-purecounter-duration="1">545</div>
                                        <div className="h6">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="d-flex py-2"><i className="mr-3 fas fa-file-alt fa-4x fa-fw"></i>
                                    <div className="ms-1">
                                        <div className="h2 mb-1 purecounter" data-purecounter-start="0" data-purecounter-end="464"
                                            data-purecounter-duration="1">464</div>
                                        <div className="h6">Appreciations</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="d-flex py-2"><i className="mr-3 fas fa-clock fa-4x fa-fw"></i>
                                    <div className="ms-1">
                                        <div className="h2 mb-1 purecounter" data-purecounter-start="0" data-purecounter-end="8565"
                                            data-purecounter-duration="1">8565</div>
                                        <div className="h6">Support Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="section py-3 py-lg-5 px-2 px-lg-4" id="contact">
                    <div className="container-narrow">
                        <div className="text-center mb-5">
                            <h2 className="marker marker-center">Contact Us</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="bg-light my-2 p-3 pt-2">
                                    <form action="https://formspree.io/your@email.com" method="POST">
                                        <div className="form-group my-2">
                                            <label htmlFor="name" className="form-label fw-bolder">Name</label>
                                            <input className="form-control" type="text" id="name" name="name" required />
                                        </div>
                                        <div className="form-group my-2">
                                            <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                            <input className="form-control" type="email" id="email" name="_replyto" required />
                                        </div>
                                        <div className="form-group my-2">
                                            <label htmlFor="message" className="form-label fw-bolder">Message</label>
                                            <textarea className="form-control" style={{ resize: 'none' }} id="message" name="message" rows="4"
                                                required></textarea>
                                        </div>
                                        <button className="btn btn-primary mt-2" type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
                                <div className="mt-3 px-2">
                                    <div className="h5">Let’s talk how we can help you!</div>
                                    <p>If you like to work with us then drop us a message using the contact form.</p>
                                    <p>Or get in touch using email, whatsapp or contact number.</p>
                                    <p>See you!</p>
                                </div>
                                <div className="mt-5 px-2">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div className="pb-1">Email:</div>
                                        </div>
                                        <div className="col-sm-10">
                                            <div className="pb-1 fw-bolder">info@filterarray.com</div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="pb-1">Whatsapp:</div>
                                        </div>
                                        <div className="col-sm-10">
                                            <div className="pb-1 fw-bolder"><Link to="https://wa.me/message/EY4LB5JXPCBVF1" target="_blank">
                                                999-944-1979</Link></div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="pb-1">Phone:</div>
                                        </div>
                                        <div className="col-sm-10">
                                            <div className="pb-1 fw-bolder">+91-999-944-1979</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage