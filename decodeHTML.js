// utils/decodeHTML.js
import he from 'he';

export const decodeHTML = (input) => {
  return he.decode(input);
};
