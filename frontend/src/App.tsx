import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <GlobalStyle />
        {/* <Header user={user}*/}
        <Router user={{}} loading={true} />
        {/* <Footer /> */}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
