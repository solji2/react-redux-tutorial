import { createAction, handleActions } from "redux-actions"; //redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있다.

//action type 정의   문자열 내용 -> 모듈이름/액션이름
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//action 함수 정의
// export const increase = () => ({ type: INCREASE }); //export가 들어가므로, 추후 이 함수를 다른 파일에서 불러와 사용할 수 있음
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE); // createAction을 사용하면 매번 객체를 직접 만들어 줄 필요가없이 더 간단하게 action 함수를 정의할 수 있다.
export const decrease = createAction(DECREASE);

//counter모듈의 초기상태
const initialState = {
  number: 0,
};

//reducer 함수 정의
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       debugger;
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };

//     default:
//       return state;
//   }
// };
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
); //handleActions 함수의 첫번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고, 두번째 파라미터에는 초기 상태를 넣어준다.
export default counter;
