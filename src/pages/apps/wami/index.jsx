import WhatsAppMessageInbox from "./MessageInbox"
import WhatsAppProfile from "./WAProfile"
import WhatsAppCustomers from './Customers'
import { ImProfile } from "react-icons/im";
import { FaRocketchat } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi";

export const wamiRoutes = [
    {
        path: 'profile',
        index: true,
        element: <WhatsAppProfile />,
        label: "WA Profile",
        icon: <ImProfile />,
        suffix: {},
        title: "We Profile",
        disbaled: false,
    },
    {
        path: 'inbox',
        index: false,
        element: <WhatsAppMessageInbox />,
        label: "Team Inbox",
        icon: <FaRocketchat />,
        suffix: {},
        title: "Team Inbox",
        disbaled: false,
    },
    {
        path: 'people',
        index: false,
        element: <WhatsAppCustomers />,
        label: "Customers",
        icon: <GiHumanPyramid />,
        suffix: {},
        title: "Customers",
        disbaled: false,
    },
];