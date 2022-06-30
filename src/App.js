import "./assets/scss/main.scss";
import { LangProvider } from "./redux/language/languageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./assets/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <LangProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/signin" element={<SignInPage />} />
              <Route exact path="/home" element={<HomePage />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </LangProvider>
    </>
  );
}

export default App;
