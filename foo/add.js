/**
 * 덧셈 함수 정의
 * @param args 숫자들
 * @returns {*}
 * @constructor
 */
function Add(...args) {
  return args.reduce((a,b) => a + b, 0)
}

