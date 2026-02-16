import { Outlet, useLocation } from "react-router";
import NavBar from "./Components/NavBar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function Layout() {
  const location = useLocation();

  return (
    <>
      <NavBar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Layout;
