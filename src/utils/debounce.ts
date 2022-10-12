type Bounce = {
  creation: number;
  timeoutId: number;
};

let bounce: Bounce;

export const debounce = (callback: () => void, delay: number) => {
  if (bounce && Date.now() - bounce.creation < delay) {
    clearTimeout(bounce.timeoutId);
  }

  const timeoutId = setTimeout(() => {
    callback();
  }, delay);

  bounce = {
    creation: Date.now(),
    timeoutId,
  };
};
