import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";

export const Timer = () => {
  console.log("Timer component render");
  const [time, setTime] = useState(0);

  const dispatch = useDispatch();
  const { isTimerOn } = useAppSelector((state) => state.timer);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // const timerAbort = setTimeout(() => {
    //   clearInterval(timer);
    // }, 20000);

    !isTimerOn && clearInterval(timer);

    return () => clearInterval(timer);
  }, [isTimerOn]);

  return (
    <>
      <div>
        <p>{time}</p>
      </div>
    </>
  );
};
