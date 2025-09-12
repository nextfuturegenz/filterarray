import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { auth } from '../firestore'
import useUser from './useUser';

const useAuth = () => {
    const authUser = useRecoilValue(authAtom);
    const setAuth = useSetRecoilState(authAtom);
    const navigate = useNavigate();
    const { getUserFromCredentials, addUser } = useUser();

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = await getUserFromCredentials(userCredential);
            localStorage.setItem('user', JSON.stringify(user));
            setAuth(user);
            return user;
        } catch (error) {
            console.log("ohh oh we got an error ", error);
        }

    }

    const logout = async (to = "/login") => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log('we need to handle this error as well')
        } finally {
            localStorage.removeItem('user');
            setAuth(null);
            navigate(to);
        }
    }

    const register = async (email, password, name, phoneNumber) => {
        // this functionality is not required as of now
        // we can add email and temparary password
        // then let user create his own profile.
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
            await sendEmailVerification(userCredential.user);
            const registeredUser = await addUser({
                email,
                name,
                phoneNumber,
                userId : userCredential.user.uid
            })
            return registeredUser;
        } catch (error) {
            console.log("ohh oh we got an error", error);
        }

    }

    return {
        authUser,
        login,
        logout,
        register
    }
}

export default useAuth