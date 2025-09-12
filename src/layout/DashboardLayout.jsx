/* 
    Author : Ashish
    DashboardLayout : This layout contains app selector board 
*/
import { SidebarHeader } from '../components/common';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import { RiLogoutBoxLine } from "react-icons/ri";

const DashboardLayout = () => {
    const { logout } = useAuth()

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div className="shadow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <SidebarHeader />
                <Link onClick={() => logout("/login")} style={{ display: 'flex', alignItems: 'center', marginRight: '15px', color:'black', textDecoration : 'none' }}><RiLogoutBoxLine /> Logout</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' , padding : '20px', backgroundColor:'#f7f6f6'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;