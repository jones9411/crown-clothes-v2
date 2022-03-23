import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utilities/firebase/firebase.utilities";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUSer}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
