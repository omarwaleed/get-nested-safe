module.exports = (obj, ...attributePath) => {
  if (obj === null || obj === undefined) return undefined;
  if (attributePath.length === 0) return obj;
  let currentObject = JSON.parse(JSON.stringify(obj));
  for (let index = 0; index < attributePath.length; index++) {
    const key = attributePath[index];
    currentObject = currentObject[key];
    if (currentObject === undefined) return undefined;
    if (!currentObject) {
      if (index < attributePath.length - 1) {
        return undefined;
      }
    }
  }
  return currentObject;
}