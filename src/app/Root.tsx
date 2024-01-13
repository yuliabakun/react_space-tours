import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import { HomePage } from "../components/pages/HomePage";
import { FavouritesPage } from "../components/pages/FavouritesPage";
import { DevelopmentPage } from "../components/pages/DevelopmentPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="tours" element={<DevelopmentPage />} />
          <Route path="about" element={<DevelopmentPage />} />
          <Route path="help" element={<DevelopmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
