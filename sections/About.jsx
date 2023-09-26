"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Teachr.sydney" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Teachr</span> is a online tutorial and learning management platform, making education avaliable every-where, even in the most remote parts of  <span className="font-extrabold text-white">Australia.</span>
          {" "} Aimed at primary, high school and HSC students we provide
        <span className="font-extrabold text-white">
          {" "}
          bite sized and long form{" "}
        </span>{" "}
        tutorial videos that are fun and highly{" "}
        <span className="font-extrabold text-white"> engaging. </span> Simply connect to our platform using a device of your <span className="font-extrabold text-white">choice</span>{" "}
        and get ready to {" "}
        <span className="font-extrabold text-white">blast off</span> to a realm of higher grades and better test results!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
