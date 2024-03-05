import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthPage } from "./components/AuthPage";
import KanjiTable from "./components/KanjiTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthPage />} />
        <Route path="/kanjitable" element={<KanjiTable />} />
      </Routes>
    </>
  );
}

export default App;
