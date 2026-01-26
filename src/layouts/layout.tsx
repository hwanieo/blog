import { Footer, Header } from "@/components/common";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <div className="container flex items-center justify-center m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
