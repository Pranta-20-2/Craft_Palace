import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import { toast } from "react-toastify";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create User

    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Google SignIn

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // GIT SignIn
    const gitLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    //logout
    const logOut = () => {
        setUser(null)
        signOut(auth)
        toast.success("Logout Successfully")
    }
    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            }
            else{
                setUser(null)
            }
            
        });
        return () => unsubscribe()
        
    }, [])
    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitLogin,
        logOut,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;