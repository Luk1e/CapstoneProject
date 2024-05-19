import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { StateType, DispatchType } from "./store/store";
import { authenticate } from "./toolkit/auth/authSlice";

function App() {
  const dispatch: DispatchType = useDispatch();
  const authSlice = useSelector((state: StateType) => state.authentication);
  const { user, isLoading } = authSlice;

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router user={user} loading={isLoading} />
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
