import { FETCH_TASKS, CREATE_TASK, EDIT_TASK, LIKE_TASK, SLASH_TASK, DELETE_TASK } from '../actions/types'

const initialState = {
  tasks: []
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
        tasks: state.tasks.map(
          singleTask => (singleTask.id === action.task.id ? Object.assign(singleTask, action.task) : singleTask)
        )
      }

    case LIKE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          singleTask => (singleTask.id === action.task.id ? Object.assign(singleTask, action.task) : singleTask)
        )
      }

    case SLASH_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.task.id)
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.task.taskId)
      }

    default:
      return state
  }
}


export default tasksReducer
