import { BrowserRouter } from "react-router-dom";

import Rotas from "./routes";
import { GlobalCss } from "./style";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
