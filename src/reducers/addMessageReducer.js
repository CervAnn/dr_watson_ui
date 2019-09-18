export const addMessageReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, {message: action.message, isUser: action.isUser}]
    default:
      return state;
  }
}