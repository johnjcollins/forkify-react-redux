import { Fraction } from 'fractional';

export const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((accum, cur) => {
      if (accum + cur.length <= limit) {
        newTitle.push(cur);
      }
      return accum + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

export const formatCount = count => {
  if (count) {
    // count = 2.5 --> 5/2 --> 2 1/2
    // count = 0.5 --> 1/2
    const newCount = Math.round(count * 10000) / 10000;
    const [int, dec] = newCount
      .toString()
      .split('.')
      .map(el => parseInt(el, 10));

    if (!dec) return newCount;

    if (int === 0) {
      const fr = new Fraction(newCount);
      return `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(newCount - int);
      return `${int} ${fr.numerator}/${fr.denominator}`;
    }
  }
  return '?';
};
