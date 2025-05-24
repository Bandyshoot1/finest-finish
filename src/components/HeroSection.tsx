"use client";

import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isFinalWord, setIsFinalWord] = useState(false);

  const handleStringTyped = (arrayPos: number) => {
    const words = [
      "Residential",
      "Construction",
      "Business",
      "Vacation/AirBNB",
    ];
    setCurrentWord(words[arrayPos]);
    setIsFinalWord(arrayPos === words.length - 1);
  };

  const handlePreStringTyped = (arrayPos: number) => {
    const words = [
      "Residential",
      "Construction",
      "Business",
      "Vacation/AirBNB",
    ];
    setCurrentWord(words[arrayPos]);
  };

  useEffect(() => {
    if (isFinalWord) {
      const restartAnimation = document.querySelector(".typed-loop-animation");
      restartAnimation?.classList.add("animate-pulse");
      setTimeout(() => {
        restartAnimation?.classList.remove("animate-pulse");
      }, 1000);
    }
  }, [isFinalWord]);

  return (
    <div className="text-lighter px-4">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-primary/30 rounded-2xl backdrop-blur-sm p-6">
          <p className="text-cyan-300 font-bold p-2 text-3xl">
            Your clean home awaits
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
            Schedule a free quote today!
          </h1>
          <div>
            <p className="md:text-4xl sm:text-3xl text-xl font-bold">
              Fast, Quality & Flexible Cleaning & Organization for
            </p>
            <ReactTyped
              className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-cyan-300 typed-loop-animation"
              strings={[
                "Residential",
                "Construction",
                "Business",
                "Vacation/AirBNB",
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
              onStringTyped={handleStringTyped}
              preStringTyped={handlePreStringTyped}
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-lighter">
            Enjoy the clean organized space in your{" "}
            <span
              className={`${
                currentWord === "Residential"
                  ? "text-cyan-300 transition duration-500 ease-in-out scale-110 inline-block"
                  : ""
              }`}
            >
              Residential Home
            </span>
            ,{" "}
            <span
              className={`${
                currentWord === "Construction"
                  ? "text-cyan-300 transition duration-500 ease-in-out scale-110 inline-block"
                  : ""
              }`}
            >
              Construction
            </span>
            ,{" "}
            <span
              className={`${
                currentWord === "Business"
                  ? "text-cyan-300 transition duration-500 ease-in-out scale-110 inline-block"
                  : ""
              }`}
            >
              Business
            </span>
            ,{" "}
            <span
              className={`${
                currentWord === "Vacation/AirBNB"
                  ? "text-cyan-300 transition duration-500 ease-in-out scale-110 inline-block"
                  : ""
              }`}
            >
              Vacation/AirBNB
            </span>
            .
          </p>
          <button className="bg-lighter w-[200px] rounded-2xl font-medium my-6 mx-auto py-3 text-primary outline outline-1 hover:bg-lighter/90 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
