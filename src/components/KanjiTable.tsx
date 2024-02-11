import KanjiCard from "./KanjiCard";

export default function KanjiTable() {
  console.log("KanjiTable render");

  return (
    <>
      <div className="grid grid-cols-[repeat(4,_100px)] gap-y-4 gap-x-4">
        <KanjiCard kanji="力" />
        <KanjiCard kanji="諦" />
        <KanjiCard kanji="強" />
        <KanjiCard kanji="斬" />
        <KanjiCard kanji="侍" />
        <KanjiCard kanji="識" />
        <KanjiCard kanji="犬" />
        <KanjiCard kanji="染" />
        <KanjiCard kanji="息" />
        <KanjiCard kanji="女" />
        <KanjiCard kanji="季" />
        <KanjiCard kanji="響" />
        <KanjiCard kanji="驚" />
        <KanjiCard kanji="車" />
        <KanjiCard kanji="服" />
        <KanjiCard kanji="璽" />
      </div>
    </>
  );
}
