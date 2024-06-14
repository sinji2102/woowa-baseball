import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 랜덤 함수 받기
    const RANDOM_NUM = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    ).map(String);

    // 사용자 숫자 받고 배열로 저장하기
    async function inputAnswer() {
      return new Promise((resolve, reject) => {
        MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (answer) => {
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
      });
    }

    // 스트라이크와 볼 여부를 확인
    function checkAnswer(ANSWER_ARR) {
      let STRIKE = 0;
      let BALL = 0;

      for (let i = 0; i < 3; i++) {
        if (RANDOM_NUM[i] === ANSWER_ARR[i].toString()) {
          STRIKE++;
        } else if (RANDOM_NUM.includes(ANSWER_ARR[i].toString())) {
          BALL++;
        }
      }
      return { STRIKE, BALL };
    }

    async function askForRestart() {
      return new Promise((resolve) => {
        MissionUtils.Console.readLine(
          "재시작하려면 1, 종료하려면 2를 입력하세요 : ",
          (answer) => {
            resolve(answer);
          }
        );
      });
    }

    while (true) {
      const ANSWER_ARR = await inputAnswer();
      const { STRIKE, BALL } = checkAnswer(ANSWER_ARR);

      if (STRIKE === 3) {
        MissionUtils.Console.print("3 스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restartAnswer = await askForRestart();
        if (restartAnswer === "1") {
          return this.play(); // 게임 재시작
        } else if (restartAnswer === "2") {
          MissionUtils.Console.print("게임이 종료됩니다.");
          throw new Error("게임이 종료됩니다.");
        } else {
          throw new Error("잘못된 입력입니다. 게임이 종료됩니다.");
        }
      } else if (BALL === 0) {
        MissionUtils.Console.print(`${STRIKE} 스트라이크`);
      } else if (STRIKE === 0) {
        MissionUtils.Console.print(`${BALL} 볼`);
      } else {
        MissionUtils.Console.print(`${BALL} 볼, ${STRIKE} 스트라이크`);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
