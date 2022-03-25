import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utilities/firebase/firebase.utilities";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const { user } = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUSer}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
