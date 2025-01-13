import Image from "next/image";
import Navbar from "./component/Navbar";
import Home  from "./components/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />
      <div className="pt-16">
        <Home />
      </div>
    </div>
  );
}
