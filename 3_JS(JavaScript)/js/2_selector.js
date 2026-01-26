/*
    document객체
     - 작성한 html의 태그를 파싱하여, 변환된 js object를 가지고 있는 객체
     - DOM : Document Object Model
*/
document.querySelector("#id").onclick = function (){
    // id와 일치하는 요소를 선택하는 선택자 함수
    // 1. getElementMyId('아이디명')
    var li = document.getElementById("myli2"); // id값과 일치하는 1개 요소 선택

    // 2. querySelector('csss선택자') css 선택자와 일치하는 요소 1개 선택
    var li = document.querySelector("#myli2");

   
        console.log(li);
        console.dir(li); // 객체구조 열림 메서드

   // 선택한 요소의 스타일 속성 변경
     li.style.color = '#fff';
        li.style.backgroundColor= 'magenta';

    // 3. id 속성값으로 접근하기.
    // - 브라우저는 (몇몇 브라우저 제외) id값의 요소를 전역변수형태로 등록하기 떄문에 id속성값을 통해 요소를 바로 흭득할 수 있다.
    // 단, 모든 브라우저에서 지원하지 않고, 또다른 견수를 차단하면 또다른
    myli2.style.color = 'red';
    // document.getElementById("myli2").style.color = 'red';

};

document.querySelector("#tag-name").onclick = function(){
    // 태그명 기준 요소 선택
    // 1. getElementsByTagName : 배열형태의 데이터 반환
    var liArr = document.getElementsByTagName("li");

    // HTMLCollection은 생기건 배열이나 배열의 유동성 메서드들은
    // 일부만 존재하는 유사배열이다.
    console.log(liArr);

    // 2. querySelectorAll(태그명 선택자)
    // NodeList도 유사배열이나, 유용한 메서드들을 지원한다.
    liArr = document.querySelectorAll("li");

    for(let index = 0; index < liArr.length; index++){
        liArr[index].style.color = 'rgb(130,220,50)';
        liArr[index].style.backgroundColor = 'magenta';
    }

    liArr.forEach((li) => {

    li.style.color = 'white';
    })
};



document.querySelector("#class-name").onclick = function (){
    //클래스명으로 요소를 선택하는 방법들
    var groups = document.getElementsByClassName("group");
    groups = document.querySelectorAll(".group");

    // 버튼을 누를때 마다 선택한 요소의 배경색을 바꾸기

    for(var i = 0; i < groups.length; i++){
        var li = groups[i];
        var current = li.style.backgroundColor;
        if(current != 'springgreen'){
            li.style.backgroundColor = 'springgreen';
        }else{
            li.style.backgroundColor = 'white';
        }
    }
};


document.querySelector("#name-selector").onclick = function(){
    //체크한 체크박스의 값들을 가져오기.
    var hobbies = document.getElementsByName("hobby");
    hobbies = document.querySelectorAll('input[name=hobby]');
    console.log(hobbies);

    for(var i = 0; i< hobbies.length; i++){
        var hobby = hobbies[i];
        // console.dir(hobby);
        //체크박스의 체크여부를 관리하는 속성
        if(hobby.checked){
            console.log(hobby.value);
        }
    }
}

document.querySelector("#email-confirm").onclick = function(){

    // 아이디로 접근
    var userEmail = document.querySelector("#userEmail");
    console.log(userEmail.value);

    // 태그명으로 접근
    var inputArr = document.querySelectorAll("input");
    console.log(inputArr[7].value);

    // name 값으로 접근
    var userEmail2 = document.querySelector("input[name=userEmail]");
    console.log(userEmail2.value);
}