
  const intialState = {
    tasks: []
  }

  const taskReducer = (state = intialState, action) => {
    switch (action.type) {
      case 'SHOW_ALL_TASKS':
        return {
          tasks: action.payload
        }

      case 'CREATE_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.task]
        }

      // case 'SLASH_TASK':
      //   return {
      //     tasks: action.payload
      //   }

      // case 'DELETE_TASK':
      //   return {
      //     tasks: action.payload
      //   }

      default: return state
    }
  }


export default taskReducer
