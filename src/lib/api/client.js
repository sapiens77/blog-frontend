/** API 연동
 *
 * axios를 사용하여 API를 연동한다. 그리고 리덕스에서 비동기 작업을 쉽게 관리하기 위해 redux-saga와 이전에 만들어서 사용했던
 * createRequestSaga 유틸 함수를 이용한다.
 *
 * API함수를 작성하기 전에 먼저 해야 할 작업이 있다. 바로 axios 인스턴스 생성하는것이다.
 */

import axios from 'axios';

const client = axios.create();

/*
    글로벌 설정 예시

    //API 주소를 다른 곳으로 사용함
    client.defaults.baseURL = 'https://external-api-server.com';

    //헤더 설정
    client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'

    //인터셉터 설정
    axios.intercepter.response.use({
        response => {
            //요청 성공 시 특정 작업 수행
            return response;
        },
        error = > {
            //요청 실패 시 특정 작업 수행
            return Promise.reject(error);
        }
    })
 */

export default client;
