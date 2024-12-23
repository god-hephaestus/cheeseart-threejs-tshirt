import gsap from "gsap";
import { MutableRefObject } from "react";

const timeline = gsap.timeline();

const doGsap = (tref: MutableRefObject<null>) => {
  timeline.from(tref.current, { y: "0", duration: 1, ease: "bounce" }, 0);
};

export default doGsap;
