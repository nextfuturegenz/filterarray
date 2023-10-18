import { atom,atomFamily } from 'recoil';
import { appDevelopment, fullStack, uiux, webDesign } from '../components/common/ImageLoader';

const blogs = [
    {
        uid: '1',
        relatedBlogIds : ['2','3','5'],
        imageUrl: appDevelopment,
        date: 'Sep. 20, 2018',
        author: 'CFL Team',
        path: '/blog/get-legacy-marketing',
        title: 'SMS Marketing',
        shortDescription : `With SMS marketing, you can send targeted text messages to your customers' mobile
        phones, which can be highly effective for promotions, reminders, and other marketing messages. Our
        platform offers advanced features such as segmentation and automation, as well as detailed analytics
        to track the success of your campaigns.`
    },
    {
        uid: '2',
        relatedBlogIds : ['1','3','5'],
        imageUrl: webDesign,
        date: 'Sep. 20, 2019',
        author: 'CFL Team',
        path: '/blog/get-legacy-marketing',
        title: 'Email Marketing',
        shortDescription : `With SMS marketing, you can send targeted text messages to your customers' mobile
        phones, which can be highly effective for promotions, reminders, and other marketing messages. Our
        platform offers advanced features such as segmentation and automation, as well as detailed analytics
        to track the success of your campaigns.`
    },
    {
        uid: '3',
        relatedBlogIds : ['2','1','5'],
        imageUrl: uiux,
        date: 'Sep. 20, 2020',
        author: 'CFL Team',
        title: 'Legacy Marketing',
        path: '/blog/get-content-marketing',
        shortDescription : `Content marketing involves creating valuable, informative content that engages and
        educates your audience. Our platform offers a range of content marketing services, including content
        creation, blog management, social media management, and more, to help you build your brand and attract
        new customers`
    },
    {
        uid: '4',
        relatedBlogIds : ['6','7','8'],
        imageUrl: fullStack,
        date: 'Sep. 20, 2021',
        author: 'CFL Team',
        path: '/blog/get-legacy-marketing',
        title: 'Legacy Marketing',
        shortDescription : `While digital marketing is important, offline marketing can also be highly
        effective for building brand awareness and driving sales. Our platform offers a range of offline
        marketing services, including branding and logo design, merchandising and promotional products, and
        event planning and coordination, to help you reach your audience through a variety of channels.`
    },
    {
        uid: '5',
        relatedBlogIds : ['2','3','1'],
        imageUrl: appDevelopment,
        date: 'Sep. 20, 2018',
        author: 'CFL Team',
        title: 'Legacy Marketing',
        path: '/blog/get-legacy-marketing',
        shortDescription : `With SMS marketing, you can send targeted text messages to your customers' mobile
        phones, which can be highly effective for promotions, reminders, and other marketing messages. Our
        platform offers advanced features such as segmentation and automation, as well as detailed analytics
        to track the success of your campaigns.`
    },
    {
        uid: '6',
        relatedBlogIds : ['4','7','8'],
        imageUrl: webDesign,
        date: 'Sep. 20, 2019',
        author: 'CFL Team',
        title: 'Legacy Marketing',
        path: '/blog/get-email-marketing',
        shortDescription : `With SMS marketing, you can send targeted text messages to your customers' mobile
        phones, which can be highly effective for promotions, reminders, and other marketing messages. Our
        platform offers advanced features such as segmentation and automation, as well as detailed analytics
        to track the success of your campaigns.`
    },
    {
        uid: '7',
        relatedBlogIds : ['6','4','8'],
        imageUrl: uiux,
        date: 'Sep. 20, 2020',
        author: 'CFL Team',
        path: '/blog/get-content-marketing',
        title: 'Content Marketing',
        shortDescription : `Content marketing involves creating valuable, informative content that engages and
        educates your audience. Our platform offers a range of content marketing services, including content
        creation, blog management, social media management, and more, to help you build your brand and attract
        new customers`
    },
    {
        uid: '8',
        relatedBlogIds : ['6','7','4'],
        imageUrl: fullStack,
        date: 'Sep. 20, 2021',
        author: 'CFL Team',
        path: '/blog/get-legacy-marketing',
        title: 'Legacy Marketing',
        shortDescription : `While digital marketing is important, offline marketing can also be highly
        effective for building brand awareness and driving sales. Our platform offers a range of offline
        marketing services, including branding and logo design, merchandising and promotional products, and
        event planning and coordination, to help you reach your audience through a variety of channels.`
    }
];

const blogAtom = atom({
    key: 'blogs',
    // get initial state from local storage to enable user to stay logged in
    default: blogs,
});

export const blogDetailAtom = atomFamily({
    key: 'blogDetail',
    default:  (slag) => {
    console.log("inside blogDetail atom family ",slag)
      const blogDetail = blogs.find((blog) => blog.path === `/blog/${slag}`);
      return blogDetail;
    },
});

export const relatedblogListAtom = atomFamily({
    key: 'relatedblogList',
    default:  (blogArr) => {
    console.log("inside relatedblogList atom family ",blogArr)
      const blogDetail = blogs.filter((blog) => blogArr.includes(blog.uid));
      return blogDetail;
    },
});

export default blogAtom;