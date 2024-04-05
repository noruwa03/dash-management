import React from "react";

type SelectBox = {
  data: any;
  onChange: (...params: any) => void;
};

const MultiSelectBox = (Props: SelectBox) => {
  const handleChange = (e: any) => {
    const elementKey = e.target.name;
    const elementState = e.target.checked;
    const changedItemIndex = Props.data.findIndex(
      (item: any) => item.key === elementKey
    );
    const updatedItem = {
      ...Props.data[changedItemIndex],
      isSelected: elementState,
    };
    const newData = [...Props.data];
    newData[changedItemIndex] = updatedItem;
    Props.onChange(newData, updatedItem);
  };
  return (
    <div className="bg-[#F3F7FE] dark:bg-[#242428] dark:text-[#FBFAFC] flex flex-row flex-wrap items-center justify-start gap-4 p-4 border-[1px] border-[#D4DCF1] dark:border-[#242428] rounded-md">
      {Props.data.map(({ label, key, isSelected }: any) => {
        return (
          <div
            className="flex flex-row items-center gap-2 capitalize text-sm"
            key={key}
          >
            <input
              type="checkbox"
              name={key}
              checked={!!isSelected}
              onChange={(e) => handleChange(e)}
            />
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectBox;
