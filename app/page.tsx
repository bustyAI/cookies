import Navbar from "./react-components/Navbar";
import CookieCarousel from "./react-components/CookieCarousel";
import CookieCalender from "./react-components/CookieCalender";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <section className="max-w-[1440px] mx-auto">
        <CookieCarousel />
      </section>
      <section className="max-w-[1440px] mx-auto">
        <CookieCalender />
      </section>
    </div>
  );
}
