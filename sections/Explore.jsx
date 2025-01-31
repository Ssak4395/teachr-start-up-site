"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [activeCard, setActiveCard] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Team" textStyles="text-center" />
        <TitleText
          title={
            <>
              Meet the team <br className="md:block hidden" />
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
    </section>
  );
};

export default Explore;
