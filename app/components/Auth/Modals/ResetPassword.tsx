import { useState, FormEvent, ChangeEvent } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [validations, setValidations] = useState({});
  const [buttonDisabled, setIsButtonDisable] = useState(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const rules = ["eightChars", "uppercase", "number", "specialChar"];

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const newPassword = evt.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const onChangeHandlerConfirmPassword = (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    const newPassword = evt.target.value;
    setConfirmPassword(newPassword);
  };

  const validatePassword = (password: string) => {
    const updatedValidations: any = {};
    rules.forEach((rule) => {
      switch (rule) {
        case "eightChars":
          updatedValidations["eightChars"] = /.{8,}/.test(password);
          break;
        case "uppercase":
          updatedValidations["uppercase"] = /[A-Z]/.test(password);
          break;
        case "number":
          updatedValidations["number"] = /[0-9]/.test(password);
          break;
        case "specialChar":
          updatedValidations["specialChar"] = /[^A-Za-z0-9]/.test(password);
          break;
        default:
          break;
      }
    });
    setValidations(updatedValidations);
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
    } else {
      setPasswordError("");
      setIsButtonDisable(!buttonDisabled);
    }
  };

  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-screen w-full bg-[#1D3045]/95 dark:bg-[#171717]/95 z-50">
        <form
          onSubmit={submitHandler}
          className="lg:w-2/5 w-[92%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:p-8 p-4 bg-white dark:bg-[#000000] rounded-lg"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:top-10 top-6 sm:right-8 right-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.41 8.5L12.7 5.21C12.89 5.03 13 4.78 13 4.5C13 3.95 12.55 3.5 12 3.5C11.72 3.5 11.47 3.61 11.29 3.79L8 7.09L4.71 3.79C4.53 3.61 4.28 3.5 4 3.5C3.45 3.5 3 3.95 3 4.5C3 4.78 3.11 5.03 3.29 5.21L6.59 8.5L3.3 11.79C3.11 11.97 3 12.22 3 12.5C3 13.05 3.45 13.5 4 13.5C4.28 13.5 4.53 13.39 4.71 13.21L8 9.91L11.29 13.2C11.47 13.39 11.72 13.5 12 13.5C12.55 13.5 13 13.05 13 12.5C13 12.22 12.89 11.97 12.71 11.79L9.41 8.5Z"
              fill="#3366FF"
            />
          </svg>

          <h1 className="text-center lg:text-lg text-2xl font-medium dark:text-[#FBFAFC] mb-5">
            Reset Password
          </h1>
          <p className="lg:text-start text-center text-black dark:text-[#FBFAFC] font-medium">
            Please, enter your valid e-mail address
          </p>
          <div className="relative mt-5 mb-1">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={onChangeHandler}
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] dark:border-[#242428] focus:border-[#557FF2] px-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black  placeholder:font-medium placeholder:text-sm dark:text-white placeholder:dark:text-[#FBFAFC] dark:bg-[#242428]"
              placeholder="Password"
              required
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-4 z-10 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-[#0D2159] dark:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
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
          </div>
          <span className="text-[0.65em] text-[#E95F5F] dark:text-red-500 dark:text-[0.7em]">
            {password.length == 0 ? null : password.length >= 8 ? null : (
              <p>Password must have:</p>
            )}
            {Object.entries(validations).map(([rule, isValid]) => {
              if (!isValid) {
                switch (rule) {
                  case "eightChars":
                    return <p key="eightChars">8 Characters minimum</p>;
                  case "uppercase":
                    return (
                      <p key="uppercase">At least one Uppercase character</p>
                    );
                  case "number":
                    return <p key="number">At least one number</p>;
                  case "specialChar":
                    return (
                      <p key="specialChar">At least one special character</p>
                    );
                  default:
                    return null;
                }
              }
              return null;
            })}
          </span>
          <div className="relative mt-5">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChangeHandlerConfirmPassword}
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] dark:border-[#242428] focus:border-[#557FF2] px-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black  placeholder:font-medium placeholder:text-sm dark:text-white placeholder:dark:text-[#FBFAFC] dark:bg-[#242428]"
              placeholder="Confirm Password"
              required
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-4 z-10 text-gray-600"
              onClick={toggleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-[#0D2159] dark:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
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
          </div>
          <span className="text-[0.75em] text-[#E95F5F]">{passwordError}</span>

          <button
            disabled={buttonDisabled}
            className={`w-full bg-[#3366FF] py-3 outline-none uppercase text-white text-base font-medium mt-6 "mt-12" : ""
            } mb-3 rounded-lg ${buttonDisabled && "bg-[#3366FF]/35"}`}
          >
            reset password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
