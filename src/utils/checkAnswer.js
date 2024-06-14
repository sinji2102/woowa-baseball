// 스트라이크와 볼 여부를 확인

import { MissionUtils } from "@woowacourse/mission-utils";

function checkAnswer(RANDOM_NUM, ANSWER_ARR) {
  let STRIKE = 0;
  let BALL = 0;

  for (let i = 0; i < 3; i++) {
    if (RANDOM_NUM[i] === ANSWER_ARR[i]) {
      STRIKE++;
    } else if (RANDOM_NUM.includes(ANSWER_ARR[i])) {
      BALL++;
    }
  }
  return { STRIKE, BALL };
}

export default checkAnswer;
