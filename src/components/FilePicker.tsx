import { Dispatch } from "react";

import { Button4 } from ".";
import { Irgb } from "../types";

const FilePicker = ({
  img,
  setLogo,
  setFile,
  color,
  enLogo,
  setEnLogo,
}: {
  img: string | null;
  setLogo: Dispatch<string>;
  setFile: Dispatch<File>;
  color: Irgb;
  enLogo: boolean;
  setEnLogo: Dispatch<boolean>;
}) => {
  const handleClick = (ind: number) => {
    if (img) {
      switch (ind) {
        case 1:
          if (!enLogo) setLogo(img);
          else setLogo("./artstore.png");
          setEnLogo(!enLogo);
          break;
      }
    }
  };
  const reset = () => {
    setEnLogo(false);
  };

  return (
    <section className="flex flex-col items-center">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className=" w-[90%] text-[13px] file:hover:bg-gray-700 file:bg-[#111] file:border-white file:border-solid file:p-1 file:px-2 file:text-white file:rounded-full file:mr-2"
        style={{
          color: `rgb(${color.r}, ${color.g}, ${color.b})`,
        }}
        onChange={(e) => {
          reset();
          setFile(e.target.files![0]);
        }}
      />
      <div className="flex justify-center overflow-hidden h-[210px] w-full mt-2 mb-2 select-none">
        {img && (
          <img
            width={"150px"}
            src={img}
            alt="use an image file!"
            className="text-white"
            draggable={false}
          />
        )}
      </div>
      <div>
        <Button4
          color={color}
          text={"Logo"}
          ind={1}
          active={enLogo}
          handleClick={handleClick}
        />
        <Button4
          color={color}
          text={"Full"}
          active={enLogo}
          ind={2}
          handleClick={handleClick}
        />
      </div>
    </section>
  );
};

export default FilePicker;
