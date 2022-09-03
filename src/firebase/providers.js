import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

//todo: Provider for Sign In witn Google account
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { uid, displayName, email, photoURL } = result.user;

    return {
      ok: true,
      //   user info
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    const errorMsg = error.message;

    return {
      ok: false,
      errorMsg,
    };
  }
};

//todo:: Provider for register using User and Password
export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    //*Update profile
    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    });

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMsg: error,
    };
  }
};

//todo:: Provider Login with Email and Password
export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMsg: error,
    };
  }
};

//todo:: Provider Logout active user
export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
