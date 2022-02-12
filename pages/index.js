import { AuthAction, withAuthUser } from 'next-firebase-auth';
import LogIn from '../components/auth/LogIn';
import LoginLayout from '../components/layout/LoginLayout';
import LoginLoading from '../components/auth/LoginLoading';

function Home() {
  return (
    <LoginLayout>
      <LogIn />
    </LoginLayout>
  );
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: LoginLoading,
})(Home);
