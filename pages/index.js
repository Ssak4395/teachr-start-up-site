import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  Solaimon,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import Sadman from "../sections/Sadman";
import Tahsin from "../sections/Tahsin";
import Ryan from "../sections/Ryan";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Solaimon />
      <div className="gradient-04 z-0" />
    </div>
      <div className="relative">
          <Sadman />
          <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
          <Tahsin />
          <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
          <Ryan />
          <div className="gradient-04 z-0" />
      </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Home;
