const CHECK = 'appBook/books/CHECK';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK });

export default categoriesReducer;
