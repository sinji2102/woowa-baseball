// 재시작 여부

import { MissionUtils } from "@woowacourse/mission-utils";

async function askRestart() {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(
      "재시작하려면 1, 종료하려면 2를 입력하세요 : ",
      (answer) => {
        resolve(answer);
      }
    );
  });
}

export default askRestart;
