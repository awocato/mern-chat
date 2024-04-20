import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="md:container px-5 flex flex-col h-[100vh]  mx-auto max-w-screen-lg">
      <Header />
      <main className="flex-grow flex"><Outlet /></main>
      <Footer />
    </div>
  );
}