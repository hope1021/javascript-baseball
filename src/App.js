class App {
  play() {

    // [0] 준비단계
    // 0-1. MissionUtils 라이브러리 (CommonJS 방식)
    const MissionUtils = require("@woowacourse/mission-utils");
    
    // 0-2.변수 및 함수 선언
    const computer=[];             
    let random_number_computer=[]; // 라이브러리로 생성된 랜덤한 숫자
    let input_number_player=[];    // 정제 전 (type : object)
    let clean_number_player=[];    // 정제 후 (type : number)
    let player=[];    
    
    // [1] 게임 시작
    // 1-1. 게임 시작 문구 출력
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    // 1-2. 랜덤 숫자 생성
    while (computer.length < 3){
      // computer의 길이가 3미만이면 문장을 수행하게 함.

      random_number_computer = MissionUtils.Random.pickNumberInRange(1,9);
      // 테스트케이스에 들어올 랜덤 숫자는  MissionUtils 라이브러리의 Random.pickNumberInRange()을 활용하여 1~9범위의 숫자를 반환
      // * pickNumberInRange(startInclusive, endInclusive) : 숫자 범위를 지정하면 시작 또는 끝 숫자를 포함하여 범위의 숫자를 반환
      
    } // while

  }
}

module.exports = App;
