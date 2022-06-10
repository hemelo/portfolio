import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";
import Testimonials from "./components/Testimonials";
import ThemeProvider from "./components/Theme";
import Training from "./components/Training";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <main className="text-gray-400 bg-primary-700 dark:bg-primary-800 body-font transition duration-500">
      <ThemeProvider>
        <Toaster  position="top-center"
          reverseOrder={false}/>
        <Navbar className="bg-primary-700 dark:bg-primary-800 transition duration-500" />
        <About className=" bg-primary-700 dark:bg-primary-800 transition duration-500" />
        <Projects className="bg-white dark:bg-gray-900 transition duration-500" />
        <Stacks className="bg-primary-700 dark:bg-primary-800 transition duration-500" />
        <Training className="bg-primary-700 dark:bg-primary-800 transition duration-500"  />
        <Testimonials  className="bg-white dark:bg-gray-900 transition duration-500" />
        <Contact /> 
      </ThemeProvider>
    </main>
  );
}
