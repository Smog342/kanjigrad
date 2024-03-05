import { useLocation, useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className={`h-screen w-screen pt-[50px] bg-auth_image_riruru`}>
        <div className="flex flex-col items-center ml-auto mr-auto pt-[5px] pl-[15px] pr-[15px] w-[33%] h-[90%] bg-white rounded-[55px]">
          <h1 className="">Kanjigrad</h1>
          {pathname.includes("/") && (
            <>
              <input></input>
              <input></input>
            </>
          )}
          {pathname.includes("/register") && (
            <>
              <input></input>
              <input></input>
              <input></input>
            </>
          )}
          <div className="flex mt-auto w-full h-[15%]">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-blue-400 rounded-bl-[55px] w-full ml-[-15px]"
            >
              Войти
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-blue-400 rounded-br-[55px] w-full mr-[-15px]"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
