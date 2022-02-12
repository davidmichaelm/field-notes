// ./initAuth.js
import { init } from 'next-firebase-auth';

const initAuth = () => {
  init({
    authPageURL: '/',
    appPageURL: '/dashboard',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    // firebaseAuthEmulatorHost: 'localhost:9099',
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'fieldnotes-app',
        clientEmail: 'firebase-adminsdk-vbni3@fieldnotes-app.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'fieldnotes-app.firebaseapp.com',
    },
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDyVQZhxr88BfzJR4XOcdWWZ3r4y019Xfo',
      authDomain: 'fieldnotes-app.firebaseapp.com',
      projectId: 'fieldnotes-app',
      storageBucket: 'fieldnotes-app.appspot.com',
      messagingSenderId: '197388934586',
      appId: '1:197388934586:web:3fe5ef9cb6cdaa4de6d183',
      measurementId: 'G-ZHKVWWJDVE',
    },
    cookies: {
      name: 'FieldNotes', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
