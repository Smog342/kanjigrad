import { useEffect, useRef, useState } from "react";

export default function useClickOutside(callback: Function) {
  const ref = useRef<HTMLDivElement>(null);
  const detectedKanjiAsRef = useRef<string | null | undefined>("");
  let detec: string | null | undefined = "";

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Element)) {
        const tar = target as Element;
        if (tar.classList.contains("kanjicard")) {
          // detec = tar.nextSibling?.firstChild?.textContent;
          // detectedKanjiAsRef.current = detec;
          console.log(tar.nextSibling?.firstChild?.textContent);
          callback();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return { cardRef: ref, detec: detectedKanjiAsRef };
}
