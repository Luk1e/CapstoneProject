// React
import ReactDOM from "react-dom/client";

// Import Application
import App from "./App.tsx";

// Import Redux toolkit
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
