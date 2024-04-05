import { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (evt: any) => {
    setQuery(evt.target.value);
  };

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop: string) => searchParams.get(prop),
    });

    const value = (params as any)?.q;
    setQuery(value);

    window.history.replaceState(
      null,
      "",
      `?q=${value.toLowerCase().replace(/ /g, "+")}`
    );
  }, []);

  const findLocation = (evt: any) => {
    if (evt.key === "Enter") {
      const newUrl = `${window.location.pathname}?q=${evt.target.value
        .toLowerCase()
        .toString()}`;

      // Reload the window with the updated URL
      window.location.href = newUrl;
    }
  };

  return (
    <>
      {" "}
      <div className="relative lg:w-full w-5/5">
        <input
          type="search"
          name="query"
          className="block w-full mt-1 outline-none border-[1px] bg-white border-[#D4DCF1] focus:border-[#557FF2] pl-10 pr-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-[#484851] placeholder:font-normal placeholder:text-sm dark:placeholder:text-[#999999] dark:bg-[#242428] dark:border-[#242428] dark:text-[#FBFAFC] capitalize"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          onKeyDown={findLocation}
          required
        />
        <div className="absolute inset-y-0 top-0 left-0 flex items-center px-4 z-10 text-gray-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:[&>path]:fill-white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.68945 0C11.9293 0 15.3781 3.3727 15.3781 7.51907C15.3781 9.47532 14.6104 11.2595 13.3542 12.5986L15.8261 15.0109C16.0574 15.2371 16.0582 15.6031 15.8269 15.8294C15.7116 15.9436 15.5592 16 15.4076 16C15.2568 16 15.1052 15.9436 14.9892 15.8309L12.4874 13.3912C11.1714 14.4219 9.5028 15.0389 7.68945 15.0389C3.44955 15.0389 0 11.6655 0 7.51907C0 3.3727 3.44955 0 7.68945 0ZM7.68945 1.15821C4.10251 1.15821 1.18433 4.01125 1.18433 7.51907C1.18433 11.0269 4.10251 13.8807 7.68945 13.8807C11.2756 13.8807 14.1938 11.0269 14.1938 7.51907C14.1938 4.01125 11.2756 1.15821 7.68945 1.15821Z"
              fill="#3366FF"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Search;
