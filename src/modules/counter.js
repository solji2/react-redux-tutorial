//action type 정의   문자열 내용 -> 모듈이름/액션이름
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//action 함수 정의
export const increase = () => ({ type: INCREASE }); //export가 들어가므로, 추후 이 함수를 다른 파일에서 불러와 사용할 수 있음
export const decrease = () => ({ type: DECREASE });

//counter모듈의 초기상태
const initialState = {
  number: 0,
};

//reducer 함수 정의
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      debugger;
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
};
export default counter;
