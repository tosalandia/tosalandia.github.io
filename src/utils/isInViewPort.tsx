import { useEffect, useMemo, useState } from "react";

type UseVPType = {
  ref: React.MutableRefObject<HTMLSpanElement | null>;
};

const useIsInViewPort = ({ ref }: UseVPType) => {
  const [isInViewPort, setIsInViewPort] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsInViewPort(entry.isIntersecting);
      }),
    []
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isInViewPort;
};

export default useIsInViewPort;
