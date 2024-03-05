import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserMutation,
  useGetUserMutation,
} from "../store/api/mainApi";
import { useForm } from "react-hook-form";
import { userCredentials } from "../utils/types";
import { useState } from "react";

export const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: { login: "", password: "", confirm_password: "" },
  });
  const { errors } = formState;
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);

  const [getUser, getUserResult] = useGetUserMutation();
  const [createUser, getCreateUserResult] = useCreateUserMutation();

  const handleAuthorization = (data: userCredentials) => {
    getUser(data)
      .unwrap()
      .then((result) => {
        console.log(result.message);
        navigate("/kanjitable");
      })
      .catch((error) => {
        setIsWrongCredentials(true);
      });
  };

  const handleRegistration = (data: userCredentials) => {
    createUser(data)
      .unwrap()
      .then(() => {
        console.log("Успешная регистрация");
        navigate("/kanjitable");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className={`h-screen w-screen pt-[50px] bg-auth_image_riruru`}>
        <div className="flex flex-col items-center ml-auto mr-auto pt-[5px] pl-[15px] pr-[15px] w-[33%] h-[90%] bg-white rounded-[55px]">
          <h1 className="">Kanjigrad</h1>
          <p>Лучший сервис для зазубривания кандзи</p>
          <p className="w-[75%] text-center">
            5000+ кандзи, 40000+ слов, обширная категоризация, поддержка
            <ruby className="ml-[5px]">
              四 <rp>(</rp>
              <rt>よ</rt>
              <rp>)</rp>
            </ruby>
            <ruby>
              字 <rp>(</rp>
              <rt>じ</rt>
              <rp>)</rp>
            </ruby>
            <ruby>
              熟 <rp>(</rp>
              <rt>じゅく</rt>
              <rp>)</rp>
            </ruby>
            <ruby>
              語 <rp>(</rp>
              <rt>ご</rt>
              <rp>)</rp>
            </ruby>
          </p>
          {!pathname.includes("/register") && (
            <>
              <form
                className="mt-[15%] flex flex-col gap-[8px] w-full h-full"
                onSubmit={handleSubmit(handleAuthorization)}
              >
                <input
                  className="mr-auto ml-auto w-[60%] h-[10%] rounded-[10px] bg-gray-50 placeholder:pl-[10px] pl-[10px]"
                  type="text"
                  placeholder="Логин"
                  {...register("login", {
                    required: { value: true, message: "Не введён логин" },
                  })}
                ></input>
                <p className="ml-auto mr-auto text-red-500">
                  {errors.login?.message}
                </p>
                <input
                  placeholder="Пароль"
                  className="mr-auto ml-auto w-[60%] h-[10%] rounded-[10px] bg-gray-50 placeholder:pl-[10px] pl-[10px]"
                  type="text"
                  {...register("password", {
                    required: { value: true, message: "Не введён пароль" },
                  })}
                ></input>
                <p className="ml-auto mr-auto text-red-500">
                  {errors.password?.message}
                </p>
                <p className="ml-auto mr-auto text-red-500">
                  {isWrongCredentials ? "Неверные логин или пароль" : ""}
                </p>
                <button type="submit">Войти</button>
              </form>
            </>
          )}
          {pathname.includes("/register") && (
            <>
              <form
                className="mt-[15%] flex flex-col gap-[8px] w-full h-full"
                onSubmit={handleSubmit(handleRegistration)}
              >
                <input
                  className="mr-auto ml-auto w-[60%] h-[10%] rounded-[10px] bg-gray-50 placeholder:pl-[10px] pl-[10px]"
                  type="text"
                  placeholder="Логин"
                  {...register("login", {
                    required: { value: true, message: "Не введён логин" },
                  })}
                ></input>
                <p className="ml-auto mr-auto text-red-500">
                  {errors.login?.message}
                </p>
                <input
                  placeholder="Пароль"
                  className="mr-auto ml-auto w-[60%] h-[10%] rounded-[10px] bg-gray-50 placeholder:pl-[10px] pl-[10px]"
                  type="text"
                  {...register("password", {
                    required: { value: true, message: "Не введён пароль" },
                  })}
                ></input>
                <p className="ml-auto mr-auto text-red-500">
                  {errors.password?.message}
                </p>
                <input
                  placeholder="Повторный пароль"
                  className="mr-auto ml-auto w-[60%] h-[10%] rounded-[10px] bg-gray-50 placeholder:pl-[10px] pl-[10px]"
                  type="text"
                  {...register("confirm_password", {
                    required: {
                      value: true,
                      message: "Не введён повторный пароль",
                    },
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "Не совпадают пароли!";
                      }
                    },
                  })}
                ></input>
                <p className="ml-auto mr-auto text-red-500">
                  {errors.confirm_password?.message}
                </p>
                <button type="submit">Зарегистрироваться</button>
              </form>
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
