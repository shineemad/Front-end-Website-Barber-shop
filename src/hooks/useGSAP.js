import { useEffect, useRef } from "react";
import { gsap } from "../utils/animations";

const useGSAP = (callback, deps = []) => {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return scope;
};

export default useGSAP;
