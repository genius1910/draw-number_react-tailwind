import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import { store } from "./redux/store";
import "./App.css";
import "primereact/resources/primereact.css"; // core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme

function App() {
  const pages = useRoutes(AppRoutes);

  return <Provider store={store}>{pages}</Provider>;
}

export default App;
