import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Header";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}