/* 
    Author : Ashish
    HomeLayout : This layout contains all the base code like headers and footer
*/
import { useEffect } from 'react';
import { Header, Footer } from '../components';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location])

    useEffect(() => {
        AOS.init({
            anchorPlacement: 'top-left',
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
            disable: 'mobile'
        });
    }, [])

    return <div className="home-layout">
        <Header />
        <Outlet />
        <Footer />
        <div id="scrolltop"><a className="btn btn-secondary" href="#top"><span className="icon"><i
            className="fas fa-angle-up fa-x"></i></span></a></div>
    </div>
}

export default HomeLayout;