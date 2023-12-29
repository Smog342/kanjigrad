import { useState } from "react";

export default function KanjiCard(props: { kanji: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
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
        className="relative w-[100px] h-[100px]"
      >
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-blue-600"
        ></div>
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute w-full h-full"
        >
          <p className="select-none font-noto font-black text-[60px] text-center">
            {props.kanji}
          </p>
        </div>
      </div>
    </div>
  );
}
