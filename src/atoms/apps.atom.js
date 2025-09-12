import { atom,atomFamily, selector } from 'recoil';
import { FaSms } from "react-icons/fa";
import { SiMinutemailer, SiContentful } from "react-icons/si";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { HiMiniRadio } from "react-icons/hi2";
import { wamiRoutes } from '../pages/apps/wami';

const defaultRoutes = [
    {
        label : "Dashboard",
        icon : "",
        path : "/app/dashboard",
        suffix : {},
        title : "Dashboard",
        disbaled : false,
    },
    {
        label : "POS",
        icon : "",
        path : "/app/pos",
        suffix : {},
        title : "Fusion POS",
        disbaled : true,
    },
    { 
        label : "Inventory",
        path : "/app/inventory",
        icon : "",
        child : [{
            label : "Categories",
        path : "/app/inventory/categories",    
        },{
            label : "Products",
        path : "/app/inventory/products",
        }]
    },
]


const apps = [
    {
        uid: '1',
        imageUrl: FaSms,
        path: '/app/sms',
        title: 'SMS Marketing',
        shortCode: 'SMkt',
        shortDescription : `With SMS marketing, you can send targeted text messages to your customers`,
        modules : defaultRoutes,
        isActive : false
    },
    {
        uid: '2',
        imageUrl: SiMinutemailer,
        path: '/app/dashboard',
        title: 'Email Marketing',
        shortCode: 'EMKT',
        modules : defaultRoutes,
        isActive : false,
        shortDescription : `With Email marketing, you can send targeted email messages to your customers`
    },
    {
        uid: '3',
        imageUrl: PiWhatsappLogoDuotone,
        title: 'Whatsapp Marketing',
        shortCode: 'WaMI',
        path: '/app/profile',
        isActive : true,
        shortDescription : `Whatsapp marketing involves creating valuable, informative content that engages and
        educates your audience`,
        modules : wamiRoutes
    },
    {
        uid: '4',
        imageUrl: MdOutlineScreenSearchDesktop ,
        title: 'Search Engine Marketing',
        path: '/app/search-engine',
        shortCode: 'WaMI',
        isActive : false,
        modules : defaultRoutes,
        shortDescription : `SEO marketing involves creating valuable, informative content that engages and
        educates your audience`
    },
    {
        uid: '5',
        imageUrl: SiContentful,
        title: 'Content marketing',
        shortCode: 'WaMI',
        path: '/app/cm',
        modules : defaultRoutes,
        isActive : false,
        shortDescription : `SEO marketing involves creating valuable, informative content that engages and
        educates your audience`
    },
    {
        uid: '6',
        imageUrl: ImNewspaper,
        title: 'Print Media',
        shortCode: 'WaMI',
        path: '/app/print-media',
        modules : defaultRoutes,
        isActive : false,
        shortDescription : `SEO marketing involves creating valuable, informative content that engages and
        educates your audience`
    },
    {
        uid: '7',
        imageUrl: HiMiniRadio ,
        title: 'Television and Radio',
        shortCode: 'WaMI',
        path: '/app/tv-radio',
        modules : defaultRoutes,
        isActive : false,
        shortDescription : `SEO marketing involves creating valuable, informative content that engages and
        educates your audience`
    }

];

// const appSelector = selector({
//     key: 'appSelector',
//     get: async ({get}) => {
//       return await setService.getAll()
//     }
// })


const appsAtom = atom({
    key: 'apps',
    // get initial state from local storage to enable user to stay logged in
    default: apps,
});

export const selectedAppAtom = atom({
    key: 'selectedApp',
    default: JSON.parse(localStorage.getItem('selectedAppId'))
})

export const appDetailAtom = atomFamily({
    key: 'appDetail',
    default: (appId) => {
        const app = apps.find((app) => app.uid === appId);
        return app;
    },
});


export default appsAtom;