import { useDispatch } from "react-redux";
import KanjiCard from "./KanjiCard";
import { Timer } from "./Timer";
import { startTimer, stopTimer } from "../store/reducers/timerSlice";

export default function KanjiTable() {
  console.log("KanjiTable render");

  const dispatch = useDispatch();

  dispatch(startTimer());

  setTimeout(() => {
    dispatch(stopTimer());
  }, 20000);

  return (
    <>
      <Timer />
      <div className="grid grid-cols-[repeat(4,_100px)] gap-y-4 gap-x-4">
        <KanjiCard kanji="力" pairA="諦" position="FIRST" />
        <KanjiCard kanji="諦" pairA="力" position="SECOND" />
        <KanjiCard kanji="強" pairA="侍" position="FIRST" />
        <KanjiCard kanji="斬" pairA="識" position="FIRST" />
        <KanjiCard kanji="侍" pairA="強" position="SECOND" />
        <KanjiCard kanji="識" pairA="斬" position="SECOND" />
        <KanjiCard kanji="犬" pairA="染" position="SECOND" />
        <KanjiCard kanji="染" pairA="犬" position="FIRST" />
        <KanjiCard kanji="息" pairA="季" position="FIRST" />
        <KanjiCard kanji="女" pairA="響" position="FIRST" />
        <KanjiCard kanji="季" pairA="息" position="SECOND" />
        <KanjiCard kanji="響" pairA="女" position="SECOND" />
        <KanjiCard kanji="驚" pairA="車" position="FIRST" />
        <KanjiCard kanji="車" pairA="驚" position="SECOND" />
        <KanjiCard kanji="服" pairA="璽" position="FIRST" />
        <KanjiCard kanji="璽" pairA="服" position="SECOND" />
      </div>
    </>
  );
}
