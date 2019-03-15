import { takeLatest, call, put } from 'redux-saga/effects';
import { dogType } from '../types';
import { client } from 'Util/api';

// function register() {
//   var test = axios({
//     method: 'post',
//     url: 'http://192.168.1.131:5000/api/auth/register',
//     data: {
//       email: 'thuc@gmail.com',
//       password: 'thuc1234',
//       passwordConf: 'thuc1234',
//       username: 'Thuc'
//     }
//   });
//   console.log(test);
//   return test;
// }

//2377-141819-973084-94159
// const login = data => {
// const data = {
//   main_id: '2377-141819-973084-94159',
//   password: 'thuc1234'
// };
//   var test = axios({
//     method: 'post',
//     url: 'http://192.168.1.131:5000/auth/login',
//     data: data
//   });
//   console.log(test);
//   return test;
// };

function* workerSaga() {
  try {
    const response = yield call(
      client().get,
      'https://dog.ceo/api/breeds/image/random'
    );
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: dogType.GET_DOG_SUCCESS, data: dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: dogType.GET_DOG_FAILURE, error });
  }
}

export default [takeLatest(dogType.GET_DOG_REQUEST, workerSaga)];
