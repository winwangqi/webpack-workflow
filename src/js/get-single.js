export default fn => {
  let obj;
  return (...rest) => {
    return obj || (obj = fn.apply(this, rest));
  };
};