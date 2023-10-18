/* 
    Author : Ashish
    AppLayout : This layout contains all the base code like Side Navbar, header and footer for app
*/
import { SideBar } from '../components';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    
    return <div className="App-layout">
        <SideBar children={<Outlet />} >
        
        </SideBar>
        
    </div>
}

export default AppLayout;