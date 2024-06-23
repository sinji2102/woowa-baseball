// 재시작 여부

import { MissionUtils } from "@woowacourse/mission-utils";

async function askRestart() {
  const restartAnswer = await MissionUtils.Console.readLineAsync(
    "재시작하려면 1, 종료하려면 2를 입력하세요 : "
  );
  return restartAnswer;
}

export default askRestart;
