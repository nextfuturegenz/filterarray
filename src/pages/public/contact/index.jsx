import { Link } from "react-router-dom"

const Contact = () => {
    return (
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
    )
}

export default Contact