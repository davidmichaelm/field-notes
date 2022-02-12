import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export default function LogIn() {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true);
    }
  }, []);

  return renderAuth ? (
    <div style={{ minWidth: '300px' }}>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  ) : null;
}
