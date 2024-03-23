import { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { detectKanji, pairKanji } from "../store/reducers/detectedKanjiSlice";
import { detectedKanjiType } from "../type";

export default function KanjiCard(props: { kanji: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaired, setIsPaired] = useState(false);

  const detectedKanjiStateRef = useRef<detectedKanjiType>({
    detectedKanjis: [],
    prevKanji: "",
    newKanji: "",
  });

  const detectedKanjiState = useAppSelector(
    (state) => state.detectedKanji,
    (_, b) => {
      detectedKanjiStateRef.current = b;
      return true;
    }
  );

  const dispatch = useDispatch();
  const { cardRef } = useClickOutside(() => {
    setIsFlipped(false);
  });

  console.log("KanjiCard render");
  console.log(detectedKanjiStateRef.current.detectedKanjis);

  useEffect(() => {
    detectedKanjiStateRef.current.prevKanji === "力" &&
      detectedKanjiStateRef.current.newKanji === "諦" &&
      (props.kanji === "力" || props.kanji === "諦") &&
      setIsPaired(true);
  }, [detectedKanjiStateRef.current]);

  if (isPaired) {
    return (
      <div className="border-[3px] border-solid border-green-400">
        <p
          className={`
      } select-none font-noto font-black text-[60px] text-center`}
        >
          {props.kanji}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onClick={() => {
        !isFlipped &&
          (setIsFlipped(!isFlipped), dispatch(detectKanji(props.kanji)));
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
          <p
            className={`kanjicard
            } select-none font-noto font-black text-[60px] text-center`}
          >
            {props.kanji}
          </p>
        </div>
      </div>
    </div>
  );
}
