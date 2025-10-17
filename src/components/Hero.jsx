import { motion } from "framer-motion";
import { styles } from "../styles";
import { IceCreamTruckCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 -z-10">
        <IceCreamTruckCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          {/* Removed scroll indicator and outer ring */}
        </a>
      </div>
    </section>
  );
};

export default Hero;