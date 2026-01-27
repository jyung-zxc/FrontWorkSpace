test1.onclick = function () {
    var str = "Samsung Apple Xiomi";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.indexOf('P1'));
    console.log(str.charAt(0));
};

test2.onclick = function () {
    var num = 1234.6;
    console.log(Math.round(num * 10) / 10);
    console.log(Math.ceil(num));
    console.log(Math.floor);
    // 그 외 자바의 메서드명과 동일한 메서드 다수 존재
};

test3.onclick = function () {
    var now = new Date();
    console.log(now);

    // 내가원하는 시간 정보를 가진 date객체
    var time1 = new Date(2026, 0, 20); // 2026-01-20
    console.log(time1);

    // 날짜형식의 문자열로 객체생성가능
    var time2 = new Date("1999/03/01 15:44:21");
    console.log(time2);

    // date 객체를 yyyy/mm/dd(e) HH:MM:ss형식으로 출력하고 싶다면?
};

function displayDate(date) {
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var dayArr = ['일', '월', '화', '수', '목', '금', '토'];
    var day = date.getDay(); //0(일)~6(ㅌ노)

    alert(yyyy = "/" + dd + "(" + dayArr[day]);
};

test4.onclick = function () {
    console.log(3, 7);

    //7은 number자료형으로 형변환 된후 연산
    console.log(7 + '7'); // 77
    console.log(7 - '7'); // 0
    console.log(7 * '7'); // 49
    console.log(7 / '7'); // 1
    console.log(7 % Number('4')); // 3
    //즉 나를 제와한 산출연산시 number자료형으로 잗ㅇ형벼노한 된다/
};

test5.onclick = function () {
    var num = "1234.567원";
    console.log(Number(num));
    //Number는 정수/실수로 변환이 가능. 단,  변환불가 문자가 있는 경우 null을 반환.
    console.log(parseInt(num));
    // 문자열을 정수로 변환. 단, 변환불가 문자가 있는 경우 해당문자의 앞까지만 반환.
    console.log(parseFloat(num));
};

test6.onclick = function () {
    console.log(10 / 0); // infinity
    console.log(typeof (10 / 0)); //number

    console.log(10 / "a"); // NaN
    console.log(typeof (10 / "a")); // number

    var num = prompt("숫자를 입력하세요");

    if (!isNaN(num)) {
        alert("숫자입니다.");
    } else {
        alert("숫자가 아닙니다.");
    }
};

test7.onclick = function () {
    /*
        자바스크립트에서는 변수나 리터럴이 boolean형으로 형변환이 가능하다.
         - if(값), Boolean(값)

        값이 존재하지 않는 것들은 false로 변환된다.
        ex) 0, -0, 0.0, "", undefined, null, NaN

        값이 존재하는 것들은 true로 변환된다.
        ex) 123, -123, 1.1, "안", "안녕" , new Date(),[], {}
    */
    console.log(Boolean(123)); // true
    console.log(Boolean(-500)); // true

    console.log(Boolean(0)); // false
    console.log(Boolean(NaN)); // flase

    console.log(Boolean("abc")); // true
    console.log(Boolean("")); //false

    console.log(Boolean(undefined)); // false
    console.log(Boolean(null)); //false
    console.log(Boolean([])); // true
    // console.log(Boolean([]+"")); // false
    console.log(Boolean({})); // true

    function fn(){
        console.log(Boolean(fn));
    }

    console.log("0" == 0); //true
    console.log([] == 0); // 
    
};

test8.onclick = function(){
    
    console.log(3 == "3"); //t
    console.log(3 != "3"); //f

    console.log(3 === "3"); // f -> 자료형이 달라서 false
    console.log(3 === 3); // t

    console.log(3 !== "3"); // t
    console.log(3 === Number("3")); // t

    console.log(null == undefined); //t
    console.log(null === undefined); //false 자료형 다름
    //console.log([] === 0); //f
};

test9.onclick = function(){
    var num = prompt("정수를 입력하세요");

    // 입력한 값이 홀수인지 짝수인지 출력
    // if(num % 2 == 0){
    //     alert("짝수");
    // }else{
    //     alert("홀수");
    // }

    // 짧은 조건문
    // a(조건식) && b(실행문) -> a가 참인경우 b 실행
    // a(조건식) || b(실행문) -> a가 거짓인경우 b 실행

    num % 2 == 0 && alert("짝수");
    num % 2 == 1 && alert("홀수");

    // num % 2 == 0 ? alert("짝수") : alert("홀수");
};