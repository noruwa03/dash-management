interface IError {
  message: string;
}

const Error = (props: IError) => {
  return (
    <div className="z-50 fixed lg:top-20 top-12 left-[50%] -translate-x-[50%] right-3">
      <div className="mx-2 sm:mx-auto max-w-sm flex flex-row items-center justify-center bg-[#FEE5E5] border-[1px] border-[#D14343] lg:p-5 p-3 text-sm leading-none rounded-lg">
        <div className="inline-flex items-center justify-center gap-3 text-[#D14343]">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1771 7.38723V8.00056C15.1763 9.43818 14.7108 10.837 13.85 11.9884C12.9892 13.1399 11.7793 13.9822 10.4007 14.3898C9.02204 14.7974 7.54859 14.7485 6.20006 14.2503C4.85154 13.7521 3.70019 12.8313 2.91772 11.6253C2.13526 10.4193 1.76361 8.9926 1.8582 7.5581C1.95279 6.1236 2.50855 4.75811 3.4426 3.66528C4.37665 2.57244 5.63894 1.81082 7.04121 1.49399C8.44348 1.17717 9.9106 1.32212 11.2238 1.90723"
              stroke="#D14343"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1667 2.66602L8.5 9.33935L6.5 7.33935"
              stroke="#D14343"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {props.message}
        </div>
      </div>
    </div>
  );
};

export default Error;
