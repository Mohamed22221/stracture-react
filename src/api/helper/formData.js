export const formDataHandler = (obj) => {
  const formData = new FormData();
  for (let key in obj) {
    if (obj[key]) formData.append(key, obj[key]);
  }
  return formData;
};

export const formURLSearchParams = (obj) => {
  const urlencoded = new URLSearchParams();

  for (let key in obj) {
    if (obj[key]) urlencoded.append(key, obj[key]);
  }
  return urlencoded;
};

export const prepareOptions = (arr = []) => {
  return arr.map((item) => ({ label: item.name, value: item.id }));
};
