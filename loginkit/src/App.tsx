import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/Landing_page/FrameComponent";
import Login_Page from "./pages/Login_Page/Login_Page";
import ReactDOM from "react-dom/client";

import { useEffect } from "react";
import Caption_Image from "./pages/Caption_Image/Caption_Image";


export default function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
  <div>
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="login" element={<Login_Page />} />
      <Route path="caption-image" element={<Caption_Image/>} />
    </Routes>
  </div>
  );
}

