import { Link } from 'react-router-dom';
import {
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6
} from '../../../components/common/ImageLoader';

const Services = () => {
    return (
        <div className="section py-3 py-lg-5 px-2 px-lg-4" id="services">
            <div className="container-narrow">
                <div className="text-center mb-4">
                    <h2 className="marker marker-center">Our Services</h2>
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
        </div>
    )
}

export default Services