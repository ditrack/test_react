/**
 * @param object
 * @returns {string}
 */
export const serializer = (object) => {
  let query = [];

  for(let key in object) {
    if (object.hasOwnProperty(key)) {
      query.push(`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`);
    }
  }

  return query.join("&");
};

export const getErrorPostion = () => {
  const error = document.getElementsByClassName('has-error')[0];
  if (error) {
    const _clientRect = error.getBoundingClientRect();

    return window.scrollY + _clientRect.top;
  }

  return null;
};

/**
 * @param duration
 */
export const scrollToTop = duration => {
  const errorPosition = getErrorPostion();
  const step = (errorPosition || window.scrollY) * -1 / (duration / 15);

  const interval = setInterval(() => {
    errorPosition && window.scrollY > errorPosition || errorPosition === null && window.scrollY > 0
      ? window.scrollBy(0, step) : clearInterval(interval);
  }, 15);
};
