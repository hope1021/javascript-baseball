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
    
  }
}

module.exports = App;
