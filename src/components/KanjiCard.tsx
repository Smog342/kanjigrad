import { useEffect, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import useGetClickedKanji from "../hooks/useGetClickedKanji";

export default function KanjiCard(props: { kanji: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaired, setIsPaired] = useState(false);
  const { cardRef, detec } = useClickOutside(() => {
    setIsFlipped(false);
  });

  console.log("KanjiCard render");

  // useEffect(() => {
  //   // if (props.kanji === "力" && detec.current === "諦") {
  //   //   console.log("PAAAAAAAAAAAAAIIIIIIRRRRRR!!!!");
  //   // }
  //   console.log(detec);
  // }, [detec.current]);

  return (
    <div
      ref={cardRef}
      onClick={() => {
        !isFlipped && setIsFlipped(!isFlipped);
      }}
      style={{ perspective: 1000, cursor: "pointer" }}
    >
      <div
        style={
          isFlipped
            ? {
                transform: "rotateY(180deg)",
                transition: "transform 300ms ease",
                transitionTimingFunction: "cubic-beizer(.57, .21, .69, 1.25)",
                transformStyle: "preserve-3d",
              }
            : {
                transition: "transform 300ms ease",
                transitionTimingFunction: "cubic-beizer(.57, .21, .69, 1.25)",
                transformStyle: "preserve-3d",
              }
        }
        className={
          isFlipped
            ? "flipped relative w-[100px] h-[100px]"
            : "relative w-[100px] h-[100px]"
        }
      >
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="kanjicard absolute w-full h-full bg-blue-600"
        ></div>
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute w-full h-full"
        >
          <p className="kanjicard select-none font-noto font-black text-[60px] text-center">
            {props.kanji}
          </p>
        </div>
      </div>
    </div>
  );
}
