
  const intialState = {
    tasks: []
  }

  const taskReducer = (state = intialState, action) => {
    switch (action.type) {
      case 'SHOW_ALL_TASKS':
        return {
          tasks: action.payload
          // NOTE: maybe .sort here?
          //.sort((a, b) => a.id - b.id)
        }

      case 'CREATE_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.task]
        }

      case 'EDIT_TASK':
        return {
          ...state,
          // tasks: action.payload
          tasks: state.tasks.map(
            singleTask => (singleTask.id === action.task.id ? Object.assign(singleTask, action.task) : singleTask)
          )
        }

      // case 'SLASH_TASK':
      //   return {
      //     tasks: action.payload
      //   }

      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task)=>task.id !== action.task.id)
        }

      default: return state
    }
  }


export default taskReducer
