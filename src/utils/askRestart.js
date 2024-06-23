// 재시작 여부

import { MissionUtils } from "@woowacourse/mission-utils";

async function askRestart() {
  const restartAnswer = await MissionUtils.Console.readLineAsync(
    "재시작하려면 1, 종료하려면 2를 입력하세요 : "
  );

  if (restartAnswer === "1") {
    return true
  } else if (restartAnswer === "2") {
    MissionUtils.Console.print("게임이 종료됩니다.");
    throw new Error("게임이 종료됩니다.");
  } else {
    throw new Error("잘못된 입력입니다. 게임이 종료됩니다.");
  }
}

export default askRestart;
