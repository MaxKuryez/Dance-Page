const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images[index] = r(item); });
  return images;
}

export {importAll};