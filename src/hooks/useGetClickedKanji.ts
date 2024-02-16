import { TransitionEvent, useEffect, useState } from "react";

export default function useGetClickedKanji() {
  let detectedKanji: string | null = "";

  useEffect(() => {
    const handleEvent = ({ target }: TransitionEvent) => {
      const tar = target as Element;
      if (tar.classList.contains("flipped")) {
        detectedKanji = tar.textContent;
        console.log(detectedKanji);
      }
    };

    document.addEventListener("transitionstart", handleEvent);

    return () => {
      document.removeEventListener("transitionstart", handleEvent);
    };
  }, []);
}
