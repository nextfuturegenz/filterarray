import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="py-5 px-2 bg-light" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <div className="mb-3">
                            <div className="h4">Filter Array</div>
                            <p className="text-muted">Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            </p>
                            <div className="social-nav">
                                <nav role="navigation">
                                    <ul className="nav text-light">
                                        <li className="nav-item"><Link className="nav-link" target="_blank" to="https://www.facebook.com/NextFuturegenz/"
                                            title="Facebook"><i className="fab fa-facebook"></i><span
                                                className="menu-title sr-only">Facebook</span></Link></li>
                                        <li className="nav-item"><Link className="nav-link" target="_blank" to="https://www.instagram.com/itsfilterarray"
                                            title="Instagram"><i className="fab fa-instagram"></i><span
                                                className="menu-title sr-only">Instagram</span></Link></li>
                                        <li className="nav-item"><Link className="nav-link" target="_blank" to="https://www.linkedin.com/company/nextfuturegenz"
                                            title="LinkedIn"><i className="fab fa-linkedin"></i><span
                                                className="menu-title sr-only">LinkedIn</span></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="text-small text-muted">
                            <div className="mb-1">&copy; Copyright <strong><Link to="https://nextfuturegenz.com/"
                                target="_blank">NextFutureGenz</Link></strong>. All rights reserved.</div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3">
                        {/* <div className="text-uppercase mb-2">Services</div>
                        <div className="nav flex-column">
                            <Link className="nav-link px-0" to={''}>Design</Link>
                            <Link className="nav-link px-0" to={''}>Development</Link>
                            <Link className="nav-link px-0" to={''}>Branding</Link>
                            <Link className="nav-link px-0" to={''}>Marketing</Link>
                        </div> */}
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3">
                        <div className="text-uppercase mb-2">About</div>
                        <div className="nav flex-column">
                            <Link className="nav-link px-0" to={'about'}>About</Link>
                            <Link className="nav-link px-0" to={'contact'}>Contact</Link>
                            <Link className="nav-link px-0" to={'tnc'}>Terms</Link>
                            <Link className="nav-link px-0" to={'faq'}>Privacy</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3">
                        <div className="text-uppercase mb-2">Contact Us</div>
                        <div className="text-small">
                            <strong>Locations :</strong><br />
                            <address>
                                B2, Rithala,<br />
                                Delhi, India<br />
                            </address>
                            <address>
                                568, South San Francisco,<br />
                                CA, United States<br />
                            </address>
                            <div className="mb-1"><strong>Phone:</strong><br />+1 650-535-2058</div>
                            <div className="mb-1"><strong>Email:</strong><br />info@filterarray.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer