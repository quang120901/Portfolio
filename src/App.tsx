import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import IMG from "./assets/image/cover.jpg"
import ThankYou from './components/ThankYou';

function App() {
  const [t, i18n] = useTranslation("global");
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["header.hello", "header.Welcome to my portfolio"];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = t(texts[textIndex]);
      const fullText = currentText;

      if (!isDeleting && displayText.length < fullText.length) {
        // Typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      } else if (!isDeleting && displayText.length === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && displayText.length === 0) {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed, t, texts]);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };


  // On Scroll Hide Content
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    }
  }, []);

  function listenToScroll() {
    let heightToHideFrom = 15;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="bg-white dark:bg-black h-screen text-white font-paytone rtl:font-lalezar font-medium transition-all capitalize normal-case">

      <Navbar />

      <div className="flex flex-col justify-center w-full lg:w-3/4 my-0 mx-auto">
        <section className="[height:96vh] flex items-center justify-center flex-col [width: 90%] lg:w-full bg-black rounded-2xl m-4 dark:bg-black dark:m-0 dark:h-screen dark:rounded-none;">
          <div className="absolute bottom-20 z-40 p-3">
            <h2 className="text-lg md:text-2xl lg:text-5xl inline-flex items-center">
              {displayText}
              <span className="inline-block w-1 h-4 md:h-6 lg:h-12 ml-1 bg-white animate-blink relative -top-1 md:-top-2 lg:-top-3"></span>
            </h2>
          </div>

          <a id={isVisible ? "hide" : "nohide"} className="mouse-scroll z-50" href="#about"></a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-3 lg:right-10 bottom-14 z-50 text-white dark:text-black rounded-full p-4 text-2xl bg-blue-200 dark:bg-blue-100"
            id={isVisible ? "nohide" : "hide"}
          >
            <MdKeyboardDoubleArrowUp />
          </button>

          <img className="absolute bottom-auto w-64 md:w-72 lg:w-96 lg:[bottom: 8vh]" src={IMG} alt="" />
        </section>

        <section className="h-auto flex items-center justify-center flex-col text-white">

          <About />

        </section>

        <section className="h-auto flex items-center justify-center flex-col text-white">

          <Projects />

        </section>

        <section className="h-auto flex items-center justify-center flex-col text-white">

          <ThankYou />

        </section>

      </div>

      <Footer />

    </div>
  );
}

export default App;