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
      
      // 1-3. 생성된 랜덤 숫자를 컴퓨터에게 넣어주기
      if(!computer.includes(random_number_computer)) {
        // 만약 테스트케이스로 들어온 랜덤 숫자가 컴퓨터(배열)에 없다면
        // * .includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드

        computer.push(random_number_computer);
        // 컴퓨터 안에 랜덤 숫자를 넣어준다.
    
      } // if
    } // while

    // 1-4. 플레이어 입력 받기
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {

      // 정제을 위한 정규식
      var SPECIAL_CHARACTERS = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi  // 특수문자
      var EMPTY = /\s/g;                                                            // 공백

      // 1-5. 입력 값 정제
      if(SPECIAL_CHARACTERS.test(answer)){
        // 특수문자 제거
        input_number_player = answer.replace(SPECIAL_CHARACTERS, "");
        // 공백 제거
        clean_number_player = input_number_player.replace(EMPTY, "");
        // 숫자형으로 변환 후 리턴
        clean_number_player = Number(clean_number_player);
        return clean_number_player;

      } else {
        // 특수문자가 없는 경우 공백 제거
        input_number_player = answer.replace(EMPTY, "");
        // 이후 숫자형변환
        clean_number_player = Number(input_number_player);
        return clean_number_player;
      } // if
    }); // readLine

  }
}

module.exports = App;
