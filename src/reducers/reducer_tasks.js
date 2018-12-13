import { FETCH_TASKS, CREATE_TASK, EDIT_TASK, SLASH_TASK, DELETE_TASK } from '../actions/types'

const initialState = {
  tasks: [],
  // slashedTasks: []
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.tasks
      }

    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }

    case EDIT_TASK:
      return {
        ...state,
        // tasks: action.payload
        tasks: state.tasks.map(
          singleTask => (singleTask.id === action.task.id ? Object.assign(singleTask, action.task) : singleTask)
        )
      }

    case SLASH_TASK:
      return {
        ...state,
        // tasks: action.payload
        tasks: state.tasks.filter((task) => task.id !== action.task.id),
        // slashedTasks: [state.slashedTasks, action.task]
        // .sort((a,b) => a.created_at - b.created_at)
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.task.id)
      }

    default:
      return state
  }
}


export default tasksReducer
