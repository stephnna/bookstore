const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author
        }
      ]
    // case 'DELETE_BOOK':
      // return state.map(book =>
      //   (book.id === action.id)
      //     ? {...book, completed: !todo.completed}
      //     : todo
      // )

      // return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}

let nextBookId = 0;
export const addBook = (title, author) => ({
  type: 'ADD_BOOK',
  id: nextBookId++,
  title,
  author
})

// export const deletBook = () => ({
//   type: 'DELETE_BOOK',
//   id: nextBookId++,
//   title,
//   author
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


export default books
