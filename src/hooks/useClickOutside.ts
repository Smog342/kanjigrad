import { useEffect, useRef, useState } from "react";

export default function useClickOutside(callback: Function) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Element)) {
        const tar = target as Element;
        if (tar.classList.contains("kanjicard")) {
          callback();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return { cardRef: ref };
}
