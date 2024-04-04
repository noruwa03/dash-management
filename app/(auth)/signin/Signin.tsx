"use client";
import ResetEmailPassword from "@/app/components/Auth/Modals/ResetEmailPassword";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";

type UserInput = {
  username: string;

  password: string;
};

const Signin = () => {
  const userInput: UserInput = {
    username: "",

    password: "",
  };
  const [input, setInput] = useState(userInput);
  const [passwordError, setPasswordError] = useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [buttonDisabled, setIsButtonDisable] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  const toggleForgotPasswordModal = () => {
    setForgotPasswordModal((prevState) => !forgotPasswordModal);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    setPasswordError("");
    setIsButtonDisable(!buttonDisabled);
  };

  return (
    <>
      {forgotPasswordModal && (
        <ResetEmailPassword close={toggleForgotPasswordModal} />
      )}

      <div className="lg:px-16 sm:px-8 px-4 lg:py-3 sm:py-14 py-12">
        <form
          onSubmit={submitHandler}
          className="lg:w-[37%] sm:w-[4/5] w-5/5 mx-auto sm:bg-white bg-[#FAFCFD] dark:bg-[#0D0D0D] dark:text-white sm:p-6 p-0 rounded-md mb-8"
        >
          <h1 className="text-center lg:text-lg text-2xl font-medium mb-5">
            Sign in
          </h1>

          <div className="mt-5">
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={onChangeHandler}
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] focus:border-[#557FF2] px-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black  placeholder:font-medium placeholder:text-sm dark:placeholder:text-white dark:bg-[#242428] dark:border-[#3366FF]/35"
              placeholder="Username"
              required
            />
          </div>

          <div className="relative mt-5">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={input.password}
              onChange={onChangeHandler}
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] focus:border-[#557FF2] px-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black  placeholder:font-medium placeholder:text-sm dark:placeholder:text-white dark:bg-[#242428] dark:border-[#3366FF]/35"
              placeholder="Password"
              required
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-4 z-10 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="[&>path]:fill-[#FBFAFC]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0025 7.50268C7.45335 7.50268 7.00406 7.95385 7.00406 8.50528C7.00406 9.0567 7.45335 9.50787 8.0025 9.50787C8.55164 9.50787 9.00094 9.0567 9.00094 8.50528C9.00094 7.95385 8.55164 7.50268 8.0025 7.50268ZM15.99 8.4752C15.99 8.46517 15.99 8.46517 15.99 8.45515V8.44512C15.99 8.43509 15.99 8.43509 15.99 8.42507C15.99 8.41504 15.99 8.41504 15.99 8.40502C15.97 8.26465 15.9101 8.14434 15.8203 8.04408C15.3111 7.37234 14.702 6.78081 14.083 6.23941C12.7551 5.06637 11.2374 4.08383 9.56006 3.69282C8.58159 3.4522 7.6131 3.44217 6.63463 3.63266C5.74602 3.81313 4.89735 4.17407 4.08861 4.62523C2.84056 5.33708 1.69236 6.30959 0.693916 7.40242C0.514197 7.61297 0.334477 7.81349 0.164743 8.03406C-0.0549142 8.32481 -0.0549142 8.67572 0.164743 8.96647C0.673947 9.63821 1.283 10.2297 1.90203 10.7711C3.22995 11.9442 4.74758 12.9267 6.42496 13.3177C7.39345 13.5483 8.37192 13.5584 9.35039 13.3578C10.239 13.1774 11.0877 12.8164 11.8964 12.3653C13.1445 11.6534 14.2927 10.6809 15.2911 9.58808C15.4708 9.38756 15.6605 9.17702 15.8303 8.95644C15.9201 8.85618 15.98 8.72585 16 8.59551C16 8.58548 16 8.58548 16 8.57546C16 8.56543 16 8.56543 16 8.55541V8.54538C16 8.53535 16 8.53535 16 8.52533C16 8.5153 16 8.50528 16 8.49525C16 8.48522 15.99 8.48522 15.99 8.4752ZM8.0025 11.5131C6.34509 11.5131 5.00718 10.1696 5.00718 8.50528C5.00718 6.84097 6.34509 5.49749 8.0025 5.49749C9.65991 5.49749 10.9978 6.84097 10.9978 8.50528C10.9978 10.1696 9.65991 11.5131 8.0025 11.5131Z"
                    fill="#8F95B2"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:[&>path]:fill-[#BACAF5]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2.08325C7.31486 2.08325 6.65778 2.35542 6.17331 2.83989C5.68884 3.32436 5.41667 3.98144 5.41667 4.66659V6.58325H10.5833V4.66659C10.5833 3.98144 10.3112 3.32436 9.82669 2.83989C9.34222 2.35542 8.68514 2.08325 8 2.08325ZM12.0833 6.58325V4.66659C12.0833 3.58362 11.6531 2.54501 10.8874 1.77923C10.1216 1.01346 9.08297 0.583252 8 0.583252C6.91703 0.583252 5.87842 1.01346 5.11265 1.77923C4.34687 2.54501 3.91667 3.58362 3.91667 4.66659V6.58325H3.33333C2.18274 6.58325 1.25 7.51599 1.25 8.66659V13.3333C1.25 14.4838 2.18274 15.4166 3.33333 15.4166H12.6667C13.8173 15.4166 14.75 14.4838 14.75 13.3333V8.66659C14.75 7.51599 13.8173 6.58325 12.6667 6.58325H12.0833ZM3.33333 8.08325C3.01117 8.08325 2.75 8.34442 2.75 8.66659V13.3333C2.75 13.6554 3.01117 13.9166 3.33333 13.9166H12.6667C12.9888 13.9166 13.25 13.6554 13.25 13.3333V8.66659C13.25 8.34442 12.9888 8.08325 12.6667 8.08325H3.33333Z"
                    fill="#0D2159"
                  />
                </svg>
              )}
            </div>
            <span className="absolute -bottom-5 left-0 text-[0.75em] text-[#E95F5F]">
              {passwordError}
            </span>
          </div>

          <button
            disabled={buttonDisabled}
            className={`w-full bg-[#3366FF] py-3 outline-none text-white text-base uppercase font-medium mt-6 ${
              passwordError ? "mt-12" : ""
            } mb-3 rounded-lg ${buttonDisabled && "bg-[#3366FF]/35"}`}
          >
            Sign up
          </button>

          <div className="my-3 flex flex-row items-center justify-center gap-2">
            <div className="w-[50%] h-[2px] bg-[#3366FF]/35"></div>
            <div className="text-sm text-black dark:text-[#FBFAFC] font-semibold">
              Or
            </div>
            <div className="w-[50%] h-[2px] bg-[#3366FF]/35"></div>
          </div>

          <div className="mt-2 w-full px-4 lg:py-[0.6rem] py-3 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.9)] bg-white rounded-lg font-medium sm:text-sm text-[0.78em] cursor-pointer hover:bg-gray-50 dark:text-[#D8DAE5] border-[1px] dark:border-[1px] dark:border-[#D8DAE5] dark:bg-transparent">
            <div className="flex flex-row items-center justify-center lg:space-x-3 space-x-2 xl:w-3/5 lg:w-4/5 sm:w-3/5 w-[70%] mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3001_5662)">
                  <path
                    d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3001_5662">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Sign Up with Google</p>
            </div>
          </div>
          <div className="my-4 w-full px-4 lg:py-[0.6rem] py-3 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.9)] bg-white rounded-lg font-medium sm:text-sm text-[0.78em] cursor-pointer hover:bg-gray-50 dark:text-[#D8DAE5] border-[1px] dark:border-[1px] dark:border-[#D8DAE5] dark:bg-transparent">
            <div className="flex flex-row items-center justify-center lg:space-x-3 space-x-2 xl:w-3/5 lg:w-4/5 sm:w-3/5 w-[70%] mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3001_5669)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3001_5669">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Sign Up with Facebook</p>
            </div>
          </div>
          <div className="w-full px-4 lg:py-[0.6rem] py-3 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.9)] bg-white rounded-lg font-medium sm:text-sm text-[0.78em] cursor-pointer hover:bg-gray-50 dark:text-[#D8DAE5] border-[1px] dark:border-[1px] dark:border-[#D8DAE5] dark:bg-transparent">
            <div className="flex flex-row items-center justify-center lg:space-x-3 space-x-2 xl:w-3/5 lg:w-4/5 sm:w-3/5 w-[70%] mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:[&>path]:fill-[#fff]"
              >
                <path
                  d="M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0378 20.1583 18.5286 20.7721 18.1361 21.113C17.5277 21.6724 16.8759 21.959 16.1779 21.9753C15.6768 21.9753 15.0725 21.8327 14.3691 21.5434C13.6633 21.2555 13.0148 21.113 12.4217 21.113C11.7998 21.113 11.1327 21.2555 10.4193 21.5434C9.70469 21.8327 9.12904 21.9834 8.68892 21.9984C8.01957 22.0269 7.35239 21.7322 6.68644 21.113C6.26139 20.7422 5.72974 20.1067 5.09285 19.2063C4.40951 18.2449 3.84772 17.13 3.4076 15.8589C2.93624 14.486 2.69995 13.1565 2.69995 11.8694C2.69995 10.3951 3.01853 9.12345 3.65665 8.05784C4.15815 7.20191 4.82533 6.52672 5.66035 6.03105C6.49537 5.53539 7.39761 5.2828 8.36925 5.26664C8.9009 5.26664 9.59809 5.43109 10.4645 5.75429C11.3284 6.07858 11.8832 6.24303 12.1264 6.24303C12.3082 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6402 7.41619C18.9849 8.4192 18.166 9.82403 18.1823 11.6262C18.1972 13.03 18.7065 14.1981 19.7073 15.1256C20.1609 15.5561 20.6674 15.8888 21.231 16.1251C21.1087 16.4795 20.9797 16.819 20.8426 17.1449ZM16.5975 0.440369C16.5975 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9736 5.06729 11.9642 4.92837 11.9642 4.78239C11.9642 3.72615 12.424 2.59576 13.2406 1.67152C13.6483 1.20356 14.1667 0.814453 14.7955 0.504058C15.4229 0.198295 16.0163 0.0292007 16.5744 0.000244141C16.5907 0.147331 16.5975 0.294426 16.5975 0.440355V0.440369Z"
                  fill="black"
                />
              </svg>

              <p>Sign Up with Apple</p>
            </div>
          </div>
          <div
            onClick={toggleForgotPasswordModal}
            className="cursor-pointer mt-8 text-sm text-center text-black dark:text-[#FBFAFC] underline decoration-black dark:decoration-white"
          >
            Forgot your password?
          </div>
          <div className="w-full grid place-content-center text-sm text-start mt-4">
            <div className="flex flex-row flex-wrap items-center justify-center space-x-2">
              <div className="text-black dark:text-[#FBFAFC]">
                Don’t have an account?
              </div>
              <Link
                href="/signup"
                className="font-medium text-[#3366FF] underline decoration-[#3366FF]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
