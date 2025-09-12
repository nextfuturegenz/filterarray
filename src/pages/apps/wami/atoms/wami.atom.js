import { atom, useRecoilState } from 'recoil';

const wamiProfileAtom = atom({
    key: 'wamiProfile',
    default: {
        businessName: 'My Business',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Cityville',
        businessDescription: 'Welcome to My Business!',
    }
});

export default wamiProfileAtom;

export const useWamiProfile = () => useRecoilState(wamiProfileAtom)