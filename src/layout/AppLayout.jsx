/* 
    Author : Ashish
    AppLayout : This layout contains all the base code like Side Navbar, header and footer for app
*/
import { SideBar } from '../components';
import { Outlet } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { appDetailAtom } from '../atoms';

const AppLayout = () => {

    //const appDetail = useRecoilValue(appDetailAtom)
    return <div className="App-layout">
        <SideBar>
            <Outlet />
        </SideBar>
        
    </div>
}

export default AppLayout;