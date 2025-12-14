import { HashRouter, Route, Routes } from "./lib/react-router-dom-proxy";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { PlatformPage } from "./pages/Platform";
import { ProductDetailPage } from "./pages/ProductDetail";
import { SolutionsPage } from "./pages/Solutions";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";
import { routeList } from "./data/products";

function App() {
  return (
    <HashRouter routes={routeList}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/:productId" element={<ProductDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
