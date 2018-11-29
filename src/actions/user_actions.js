// import { alertActions } from '../actions/alert_actions'
// import { userConstants } from '../constants/user_constants'
// import { history } from '../helpers/history'
//
// export const userActions = {
//   login,
//   logout,
//   register
// }
//
// function login(user_name, password) {
//     return dispatch => {
//         dispatch(request({ user_name }))
//
//         userService.login(user_name, password)
//             .then(
//                 user => {
//                     dispatch(success(user))
//                     history.push('/')
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };
//
//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }
