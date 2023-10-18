import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { auth, db } from '../firestore'
import { doc, getDoc } from 'firebase/firestore'

const getUserFromCredentials = async (credentials) => {
    // from credentials get uid 
    // go to users collections and fetch details 
    // now in user Meta we have to distinguish between organizations admin or super admin
    // isSysAdmin refers to super admin 
    // role refers to role of user in organization
    console.log(credentials, "user credentails")
    const { user } = credentials;
    const { uid } = user;

    const userRef = doc(db, "users", uid);

    try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            const details = docSnap.data();
            return { ...user, details };
        } else {
            console.log("Document does not exist")
            throw new Error("Document does not exist")
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

const useAuth = () => {
    const authUser = useRecoilValue(authAtom);
    const setAuth = useSetRecoilState(authAtom);
    const navigate = useNavigate();

    const login = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = await getUserFromCredentials(userCredential);
        localStorage.setItem('user', JSON.stringify(user));
        setAuth(user);
        return user;
    }

    const logout = async (to = "/login") => {
        // remove user from local storage, set auth state to null and redirect to login page
        //await signOut(auth)
        localStorage.removeItem('user');
        setAuth(null);
        navigate(to);
    }

    const register = async (email , password) => {
        // this functionality is not required as of now
        // we can add email and temparary password
        // then let user create his own profile.
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const veficiationEmailSent = await sendEmailVerification(userCredential);
        return veficiationEmailSent;
    }

    return {
        authUser,
        login,
        logout,
        register
    }
}

export default useAuth