export const removeDuplicateData = (data) => {
  if (data.length > 1) {
    data.splice(1, data.length - 1);
  }
};
