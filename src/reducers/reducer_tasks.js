
  const intialState = {
    tasks: [],
    slashedTasks: []
  }

  const taskReducer = (state = intialState, action) => {
    switch (action.type) {
      case 'SHOW_ALL_TASKS':
        return {
          tasks: action.payload
          .sort((a, b) => a.id - b.id)
          // NOTE: added the .sort in order to prevent
          // the latest edited task from being pushed
          // to the end of the tasks array (on the front-end).
          // back-end database still has the task moved to
          // the end of the tasks array.
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

      case 'SLASH_TASK':
        return {
          ...state,
          // tasks: action.payload
          tasks: state.tasks.map(
            singleTask => (singleTask.id === action.task.id ? Object.assign(singleTask, action.task) : singleTask)
          )
        }

      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.task.id)
        }

      default: return state
    }
  }


export default taskReducer
