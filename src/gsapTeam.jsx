import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { persons as initialPersons } from "./data"; // Assuming data.js exports 'persons'

gsap.registerPlugin(Flip);

// It's good practice to define this component outside GsapTeam
// to prevent it from being re-created on every render.
const PersonCard = ({ id, image, name, designation }) => (
  <div
    // GSAP Flip needs a data attribute to track elements across renders
    data-flip-id={id}
    className="box group flex flex-col items-center rounded-2xl shadow-lg overflow-hidden 
               bg-white dark:bg-gray-900 hover:shadow-2xl 
               w-full mx-auto"
  >
    <div className="relative w-full h-60 md:h-72 overflow-hidden">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="text-white text-sm md:text-base font-semibold text-center px-2">
          {designation}
        </span>
      </div>
    </div>
    <div className="p-4 w-full text-center overflow-hidden">
      <h3
        className="font-bold text-lg md:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate"
        style={{ fontFamily: '"Oswald", "sans-serif"' }}
      >
        {name}
      </h3>
      <p className="italic text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1 line-clamp-2">
        {designation}
      </p>
    </div>
  </div>
);

export default function GsapTeam() {
  const containerRef = useRef(null);
  const [persons, setPersons] = useState(initialPersons);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleUpdate = (forward = true) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Get the state of the elements BEFORE the DOM changes
    const state = Flip.getState(containerRef.current.children);

    // Update React state to trigger a re-render
    if (forward) {
      setPersons((prevPersons) => {
        const [first, ...rest] = prevPersons;
        return [...rest, first]; // Move the first person to the end
      });
    } else {
      setPersons((prevPersons) => {
        const last = prevPersons[prevPersons.length - 1];
        const rest = prevPersons.slice(0, prevPersons.length - 1);
        return [last, ...rest]; // Move the last person to the beginning
      });
    }

    // Animate from the previous state
    Flip.from(state, {
      duration: 0.7,
      ease: "power2.inOut",
      absolute: true, // Positions elements absolutely during the animation
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };

  return (
    <div className="wrapper flex items-center flex-col justify-center bg-amber-300">
      <div
        ref={containerRef}
        className="container flex flex-nowrap gap-4 overflow-hidden p-4  items-center bg-amber-500 w-full justify-center"
      >
        {persons.map((person) => (
          // Use JSX syntax and a stable key from your data
          <PersonCard key={person.id} {...person} />
        ))}
      </div>

      <div className="buttons flex justify-center gap-4 mt-8">
        <button
          onClick={() => handleUpdate(false)}
          disabled={isAnimating}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 transition-opacity"
        >
          Previous
        </button>
        <button
          onClick={() => handleUpdate(true)}
          disabled={isAnimating}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// IMPORTANT: Ensure your data in data.js has unique IDs for each person.
// This is critical for both React and GSAP Flip to work correctly.
// Example data.js:
// export const persons = [
//   { id: 1, name: 'John Doe', designation: 'CEO', image: '...' },
//   { id: 2, name: 'Jane Smith', designation: 'CTO', image: '...' },
//   // ...and so on
// ];