// 숫자 입력 및 입력 검사

import { MissionUtils } from "@woowacourse/mission-utils";

async function inputAnswer() {
  const answer = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해 주세요 : "
  );
  return new Promise((resolve, reject) => {
    const ANSWER_ARR = answer.split("").map(Number);

    // 잘못된 입력이면 throw로 게임 중단
    if (
      ANSWER_ARR.length !== 3 ||
      !ANSWER_ARR.every((num) => !isNaN(num) && num >= 1 && num <= 9)
    ) {
      reject(
        new Error(
          "잘못된 입력입니다. 1부터 9까지의 숫자 중 3자리 숫자를 입력해주세요."
        )
      );
    } else {
      resolve(ANSWER_ARR);
    }
  });
}

export default inputAnswer;
