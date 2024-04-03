import { Outlet } from "react-router-dom";
import Loader from "../components/loader/Loader";
import LoginPage from "../pages/app/login/LoginPage";

interface AuthLayoutProps {
  user?: any;
  isLoading?: boolean;
}

function AuthorizedLayout({ user, isLoading }: AuthLayoutProps) {
  return (
    <>
      {isLoading ? (
        <Loader color={"darkmagenta"} />
      ) : user ? (
        <>
          <Outlet />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default AuthorizedLayout;
