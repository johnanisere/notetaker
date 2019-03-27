export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const deleteFromArrays = (notes, key) => {
  let allnotes = [...notes];
  allnotes.splice(key, 1);
  return allnotes.map((note, key) => ({
    ...note,
    number: allnotes.length - key
  }));
};
