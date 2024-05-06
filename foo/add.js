/**
 * 덧셈 함수 정의
 * @param args 숫자들
 * @returns {*} 숫자 값123123
 * @constructor
 */
function Add(...args) {
  return args.reduce((a,b) => a + b, 0)
}

