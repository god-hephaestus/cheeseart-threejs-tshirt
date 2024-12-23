import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Model } from "../model";
import { Tab1, Tab2, Tab3, Header } from "../containers";
import { reader, doGsap, saveStates, loadStates } from "../helper";
import { Irgb } from "../types";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [color, setColor] = useState({ r: 167, g: 20, b: 20 });
  const [isLogo, setIsLogo] = useState(true);
  const [logoS, setLogoS] = useState(0);
  const [logoP, setLogoP] = useState(1);
  const [logo, setLogo] = useState("./logo.png");
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<string | null>(null);

  const tref = useRef(null);

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result));
    }
  }, [file]);

  const handleLogo = () => {
    setIsLogo(!isLogo);
  };

  const handleSaveState = () => {
    const stateToSave = { logo, logoP, logoS, color };
    saveStates(stateToSave);
  };

  const handleLoadState = async (file: File) => {
    try {
      const savedState: any = await loadStates(file);
      const { logo, logoP, logoS, color } = savedState;
      setLogo(logo);
      setLogoP(logoP);
      setLogoS(logoS);
      setColor(color);
    } catch (error) {
      console.error("Error loading state:", error);
    }
  };

  const handleLogoP = (ind: number) => {
    setLogoP(ind);
  };
  const handleLogoS = (ind: number) => {
    setLogoS(ind);
  };

  const changeColor = (rgb: Irgb) => {
    setColor({ r: rgb.r, g: rgb.g, b: rgb.b });
  };

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  useGSAP(() => {
    doGsap(tref);
  });

  const checkScreen = () => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  };

  window.addEventListener("resize", checkScreen);

  return (
    <main className="h-screen overflow-hidden bg-center bg-main-img">
      <section ref={tref} className="h-full ">
        <Model
          isMobile={isMobile}
          color={color}
          logo={logo}
          isLogo={isLogo}
          logoP={logoP}
          logoS={logoS}
        />
      </section>
      <Header color={color} />
      <Tab1
        color={color}
        handleLogo={handleLogo}
        isLogo={isLogo}
        handleSaveState={handleSaveState}
        handleLoadState={handleLoadState}
      />
      <Tab2
        changeColor={changeColor}
        color={color}
        setFile={setFile}
        img={img}
        setLogo={setLogo}
      />
      <Tab3
        color={color}
        logoS={logoS}
        logoP={logoP}
        handleLogoP={handleLogoP}
        handleLogoS={handleLogoS}
      />
    </main>
  );
};

export default Home;
