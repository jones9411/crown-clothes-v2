import { signInWithGooglePopup } from "../../utilities/firebase/firebase.utilities";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUSer}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
