import { useState, useEffect, FormEvent } from "react";
import MultiSelectBox from "../MultiSelectBox";

type Modal = {
  close: () => void;
  setReviewSuccess: (evt: any) => any;
};

const AddReview = (Props: Modal) => {
  const list = [
    {
      key: "Schools",
      label: "Schools",
      isSelected: false,
    },
    {
      key: "Hospitals",
      label: "Hospitals",
      isSelected: false,
    },
    {
      key: "Resort Park",
      label: "Resort Park",
      isSelected: false,
    },
    {
      key: "Shopping Malls",
      label: "Shopping Malls",
      isSelected: false,
    },
    {
      key: "Airport",
      label: "Airport",
      isSelected: false,
    },
    {
      key: "Train Station",
      label: "Train Station",
      isSelected: false,
    },
    {
      key: "Nightlife",
      label: "Nightlife",
      isSelected: false,
    },
    {
      key: "Public Wifi",
      label: "Public Wifi",
      isSelected: false,
    },
    {
      key: "Parking Lot",
      label: "Parking Lot",
      isSelected: false,
    },
    {
      key: "Security",
      label: "Security",
      isSelected: false,
    },
    {
      key: "Public Transport",
      label: "Public Transport",
      isSelected: false,
    },
    {
      key: "Bus Station",
      label: "Bus Station",
      isSelected: false,
    },
    {
      key: "Quiet",
      label: "Quiet",
      isSelected: false,
    },
  ];
  const [reviewState, setReviewState] = useState(list);

  const [state, setState] = useState({
    isOpen: false,
    inputValue: "",
  });

  const [review, setReview] = useState("");
  const [anonymous, setIsAnonymous] = useState(false);

  const handleReview = (evt: any) => {
    setReview(evt.target.value);
  };
  const handleChange = (evt: any) => {
    setIsAnonymous(evt.target.checked);
  };
  const onChange = (updatedList: any) => {
    // console.log("updatedItem", updatedItem, updatedList);
    setReviewState(updatedList);
  };

  const handleInputClick = () => {
    setState((preState) => {
      return {
        ...preState,
        isOpen: !preState.isOpen,
      };
    });
  };

  const closeModal = () => {
    Props.setReviewSuccess("Review Edited Not Successful");
    Props.close();
    setTimeout(() => {
      Props.setReviewSuccess("");
      ("");
    }, 3000);
  };

  useEffect(() => {
    const selectedLabels = reviewState
      .filter((item) => item.isSelected)
      .map((item) => item.label);
    setState((prevState) => {
      return { ...prevState, inputValue: selectedLabels.join() };
    });
  }, [reviewState]);

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    const selectedUserReview = reviewState.filter(
      (data: any) => data.isSelected === true
    );

    const mapData = selectedUserReview.map((data: any) => data.key);
    Props.setReviewSuccess("Review submitted");
    Props.close();
    setTimeout(() => {
      Props.setReviewSuccess("");
      ("");
    }, 3000);
  };

  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-screen w-full bg-[#1D3045]/95 dark:bg-[#171717]/95 z-50">
        <form
          onSubmit={submitHandler}
          className="lg:w-2/5 w-[92%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:p-6 p-4 bg-white border-[1px] border-white dark:border-[#D4DCF1] dark:bg-[#000000] rounded-lg"
        >
          <h1 className="text-center font-medium dark:text-[#FBFAFC] mb-3">
            Review Location
          </h1>
          <p className="lg:text-start text-center lg:text-lg text-base text-black dark:text-[#FBFAFC] font-medium">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </p>
          <div className="mt-5 relative">
            <input
              type="text"
              value={state.inputValue}
              readOnly
              onClick={() => handleInputClick()}
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] dark:border-[#242428] focus:border-[#F3F7FE] px-4 lg:py-[0.65rem] py-[0.9rem] rounded-md placeholder:text-black placeholder:font-medium placeholder:text-sm placeholder:dark:text-[#FBFAFC] dark:bg-[#242428] cursor-default sm:text-sm text-xs dark:text-[#FBFAFC]"
              placeholder="Select Amenities"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4 z-10 text-gray-600">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:[&>path]:fill-[#BACAF5]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0C8.72 0 8.47 0.11 8.29 0.29L5 3.59L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L4.29 5.71C4.47 5.89 4.72 6 5 6C5.28 6 5.53 5.89 5.71 5.71L9.71 1.71C9.89 1.53 10 1.28 10 1C10 0.45 9.55 0 9 0Z"
                  fill="#8F95B2"
                />
              </svg>
            </div>
          </div>
          <div>
            {state.isOpen && (
              <div className="fixed lg:top-[9.4rem] sm:top-[9.1rem] top-[10.5rem] left-0 w-full sm:px-6 px-4">
                {" "}
                <MultiSelectBox data={reviewState} onChange={onChange} />
              </div>
            )}
          </div>

          <p className="text-start font-medium tex-sm dark:text-[#FBFAFC] mt-3">
            Rate location
          </p>
          <svg
            width="136"
            height="24"
            viewBox="0 0 136 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFC700"
              fillOpacity="0.4"
            />
            <path
              d="M40 2L43.09 8.26L50 9.27L45 14.14L46.18 21.02L40 17.77L33.82 21.02L35 14.14L30 9.27L36.91 8.26L40 2Z"
              fill="#FFC700"
              fillOpacity="0.4"
            />
            <path
              d="M68 2L71.09 8.26L78 9.27L73 14.14L74.18 21.02L68 17.77L61.82 21.02L63 14.14L58 9.27L64.91 8.26L68 2Z"
              fill="#FFC700"
              fillOpacity="0.4"
            />
            <path
              d="M96 2L99.09 8.26L106 9.27L101 14.14L102.18 21.02L96 17.77L89.82 21.02L91 14.14L86 9.27L92.91 8.26L96 2Z"
              fill="#FFC700"
              fillOpacity="0.4"
            />
            <path
              d="M124 2L127.09 8.26L134 9.27L129 14.14L130.18 21.02L124 17.77L117.82 21.02L119 14.14L114 9.27L120.91 8.26L124 2Z"
              fill="#FFC700"
              fillOpacity="0.4"
            />
          </svg>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="Review"
              className="text-start tex-sm dark:text-[#FBFAFC] mt-3"
            >
              Write Review
            </label>
            <textarea
              name=""
              id="Review"
              value={review}
              onChange={handleReview}
              className="resize-none h-36 mt-3 w-full outline-none border-[1px] bg-white border-[#D4DCF1] dark:border-[#D4DCF1] focus:border-[#557FF2] px-2 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black placeholder:font-normal placeholder:text-sm placeholder:dark:text-[#FBFAFC] dark:bg-transparent dark:text-[#FBFAFC]"
              placeholder="Placeholder"
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-start gap-3 mt-3">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={handleChange}
              value={review}
            />
            <p className="text-sm dark:text-[#FBFAFC]">Post as Anonymous</p>
          </div>

          <div className="w-full flex flex-row items-center justify-between gap-6">
            <button
              disabled={review.length === 0 ? true : false}
              className={`block text-center uppercase w-full bg-[#3366FF] py-3 outline-none text-white text-sm font-medium mt-4 rounded-lg ${
                review.length === 0 ? "bg-[#3366FF]/35 dark:bg-[#E4E9FB]" : ""
              }`}
            >
              submit
            </button>
            <div
              onClick={closeModal}
              className="cursor-pointer block text-center uppercase w-full bg-white dark:bg-transparent py-[0.7rem] border-[1px] border-[#3366FF] outline-none text-[#3366FF] text-sm font-medium mt-4 rounded-lg"
            >
              cancel
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReview;
