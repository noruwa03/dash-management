const VerifyEmail = () => {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-screen w-full bg-[#1D3045]/95 dark:bg-[#171717]/95 z-50">
        <div className="lg:w-2/5 w-[92%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:p-8 p-4 bg-white dark:bg-[#000000] rounded-lg">
          <div className="grid place-content-center mb-6">
            <svg
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_507_39963)">
                <path
                  d="M0.791123 40.9481L105.094 40.2295L108 108L0 107.042L0.791123 40.9481Z"
                  fill="#3366FF"
                />
                <path
                  d="M0.791016 40.9482L53.7414 0L105.094 40.2296"
                  fill="#3366FF"
                />
                <g opacity="0.3">
                  <path
                    opacity="0.3"
                    d="M0.791016 40.9482L53.7414 0L105.094 40.2296"
                    fill="black"
                  />
                </g>
                <path
                  d="M-0.000382353 107.042C-0.133542 106.929 8.21633 98.2157 18.6497 87.5781C29.0832 76.9405 37.6367 68.4215 37.7699 68.5413C37.903 68.6611 29.5531 77.3672 19.1197 88.0048C8.6863 98.6424 0.132777 107.161 -0.000382353 107.042Z"
                  fill="white"
                />
                <path
                  d="M108 108C107.867 108.112 99.7361 99.5781 89.8431 88.9331C79.9502 78.288 72.0311 69.5669 72.1643 69.4696C72.2974 69.3723 80.428 77.8913 90.3209 88.5363C100.214 99.1814 108.133 107.888 108 108Z"
                  fill="white"
                />
                <g opacity="0.5">
                  <path
                    opacity="0.5"
                    d="M105.094 40.2295L52.7153 80.2195L0.791016 40.9481"
                    fill="black"
                  />
                </g>
                <path
                  d="M6.04679 44.6537L5.89014 15.6605L97.2452 13.5195L98.24 45.245L52.7152 79.6955L6.04679 44.6537Z"
                  fill="#F3F3F3"
                />
                <path
                  d="M53.9919 69.2753C41.4514 69.3053 31.253 59.6109 31.2217 47.6259C31.2217 46.7875 31.2687 45.949 31.3705 45.1106C32.7804 33.193 44.0363 24.6215 56.5141 25.969C68.9841 27.3165 77.9527 38.0738 76.535 49.999C75.2347 60.9659 65.5376 69.2603 53.9919 69.2753ZM53.9292 26.6053C41.8196 26.6203 32.005 36.0152 32.0206 47.5885C32.0363 59.1618 41.8666 68.5417 53.9762 68.5267C65.1225 68.5117 74.4828 60.5167 75.7439 49.9391C77.1146 38.4406 68.4749 28.0501 56.4436 26.7326C56.4358 26.7326 56.4279 26.7326 56.4123 26.7326C55.5898 26.6278 54.7595 26.5754 53.9292 26.5604V26.6053Z"
                  fill="#3366FF"
                />
                <path
                  d="M38.4985 50.5678L42.2975 46.1212L51.18 52.2522L65.616 35.9927L69.9711 39.6533L51.3993 60.105L38.4985 50.5678Z"
                  fill="#3366FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_507_39963">
                  <rect width="108" height="108" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-center text-[#3366FF] font-medium">
            Verify E-mail Address
          </p>
          <div className="font-medium text-base text-center text-black dark:text-[#FBFAFC] mt-5 mb-4">
            Thank you for signing up on AreaFinder. In order to keep your
            account safe and secure, we’ll need you to verify your e-mail
            address by clicking the verification link sent to your mail box.
            Thank you!
          </div>
          <div className="w-5/5">
            <a
              href="/"
              className="block text-center uppercase w-full bg-[#3366FF] py-3 outline-none text-white text-sm font-medium mt-4 rounded-lg"
            >
              Go to your mailbox
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
