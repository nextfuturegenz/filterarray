import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firestore";

const useUser = () => {

    const updateUser = async ({ updateUserObj, userId = auth.currentUser.uid, getDetails = false }) => {
        try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, updateUserObj);

            if (getDetails) {
                const user = await getUserDetails(userId);
                return user;
            } else {
                return true;
            }
        } catch (error) {
            console.log("ooh ho we got an error while updating user", error)
        }

    }

    const getUser = async (userId = auth.currentUser.uid) => {
        try {
            const docRef = doc(db, 'users', userId);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        } catch (error) {
            console.log("ooh ho we got an error while getting user", error)
        }

    }

    const addUser = async (userObj) => {
        try {
            const { name, email, phoneNumber, userId } = userObj
            const userRef = {
                username: name,
                email,
                phoneNumber,
                identityVerified: true,
                isSysAdmin: false,
                onboardingCompleted: false,
                planSelected: false,
                role: 'admin',
                organisationId: ''
            }
            // Add a new document with a generated id.
            const docRef = await setDoc(doc(db, "users", userId), userRef);
            //const docRef = await addDoc(collection(db, "users"), userRef);
            console.log("Document written with ID: ", docRef);
            return {userRef}
        } catch (error) {
            console.log("ooh ho we got an error while adding user", error)
        }
    }

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
            console.log("ooh ho we got an error while getting user from credential", error)
            throw new Error(error)
        }

    }

    return {
        updateUser,
        getUser,
        getUserFromCredentials,
        addUser
    }
}

export default useUser;