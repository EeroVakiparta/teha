const todos = (state = [], action) => {
    // if state not defined pass empty array
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      default:
        return state;
    }
  }
  
  export default todos;