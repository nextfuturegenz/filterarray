import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
                <div className="container"><Link className="link-dark navbar-brand site-title mb-0" to="/">Filter Array</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul><Link className="btn btn-primary" to="/login">Get Started</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header