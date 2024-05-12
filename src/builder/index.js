import * as yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive().integer(),
  link: yup.string().url().notOneOf(['']),
  genre: yup.string().oneOf(genres),
});

export default (books) => books.filter((book) => !schema.isValidSync(book));
