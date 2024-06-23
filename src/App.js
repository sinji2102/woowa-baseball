import { MissionUtils } from "@woowacourse/mission-utils";

import inputAnswer from "./utils/inputAnswer.js";
import checkAnswer from "./utils/checkAnswer.js";
import askRestart from "./utils/askRestart.js";
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 랜덤 함수 받기
    const RANDOM_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    while (true) {
      const ANSWER_ARR = await inputAnswer();
      const { STRIKE, BALL } = checkAnswer(RANDOM_NUM, ANSWER_ARR);
      let MESSAGE = "낫싱";

      if (STRIKE === 3) {
        MissionUtils.Console.print("3 스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restartAnswer = await askRestart();
        MissionUtils.Console.print(typeof restartAnswer);
        if (restartAnswer === "1") {
          return this.play(); // 게임 재시작
        } else if (restartAnswer === "2") {
          MissionUtils.Console.print("게임이 종료됩니다.");
          throw new Error("게임이 종료됩니다.");
        } else {
          throw new Error("잘못된 입력입니다. 게임이 종료됩니다.");
        }
      } else if (STRIKE !== 0 && BALL !== 0) {
        MESSAGE = `${BALL} 볼, ${STRIKE} 스트라이크`;
      } else if (STRIKE !== 0) {
        MESSAGE = `${STRIKE} 스트라이크`;
      } else if (BALL !== 0) {
        MESSAGE = `${BALL} 볼`;
      }
      MissionUtils.Console.print(`${MESSAGE}`);
    }
  }
}

const app = new App();
app.play();

export default App;
