const notificationReducer = (state = 'ALL', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter
      default:
        return state
    }
  }

  export const notificationChange = filter => {
    return {
      type: 'SET_FILTER',
      filter,
    }
  }
  
  export default notificationReducer