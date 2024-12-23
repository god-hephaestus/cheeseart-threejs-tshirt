import { logo, save } from "../assets/icons";
import { Button2 } from "../components";
import { canvasDownloader } from "../helper";
import { Irgb } from "../types";

const Tab1 = ({
  color,
  handleLogo,
  handleFull,
  isLogo,
}: {
  color: Irgb;
  handleLogo: () => void;
  handleFull: () => void;
  isLogo: boolean;
}) => {
  const handleClick = (ind: number) => {
    switch (ind) {
      case 1:
        handleLogo();
        break;
      case 2:
        canvasDownloader();
        break;
      case 3:
        handleFull();
        break;
    }
  };

  return (
    <section
      style={{
        borderColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
      }}
      className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex items-center justify-around z-1 bottom-[15px] left-[50%] translate-x-[-50%] md:w-[220px] md:h-[70px] w-[210px] h-[60px] "
    >
      <Button2
        img={logo}
        active={isLogo}
        color={color}
        ind={1}
        handleClick={handleClick}
      />
      <Button2
        img={save}
        active={false}
        color={color}
        ind={2}
        handleClick={handleClick}
      />
      <Button2
        img={save}
        active={false}
        color={color}
        ind={3}
        handleClick={handleClick}
      ></Button2>
    </section>
  );
};

export default Tab1;
