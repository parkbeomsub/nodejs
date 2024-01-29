//입출력
var age = 20;
console.log('나이 : %d',age);

var name = '소녀시대';
console.log('이름 :%s', name);


//배열생성
var Person={};
Person["age"]=20;
Person["name"]=20;
Person.mobile='010-1234-1234'

console.log("나이 : %d",Person.age);
console.log("이름 : %s",Person.name);
console.log("전화 : %s",Person["mobile"]);


//함수 생성
function add(a, b){return a + b;}


var result = add(10, 10); 
console.log('더하기 (10, 10) : %d', result);




var add = function (a, b) {return a + b;}
    var result = add(10, 10);
     console.log('더하기 (10, 10) : %d', result);





// 객체에 함수 삽입
var Person = {}; 
Person["age"] = 20;
Person["name"] = '소녀시대'; 
Person.add = function(a, b) {
return a + b;
}
console.log('더하기 : %d', Person.add(10, 10));




var Person = {}; 
Person["age"] = 20;
Person["name"] = '소녀시대';
var add = function(a, b) {
return a + b;
}
Person["add"] = add;
console.log('더하기 : %d', Person.add(10, 10));




var Person = { 
    age: 20,
    name: '소녀시대', 
    add: function(a, b) {
    return a + b;
    }

}
console.log('더하기 : %d', Person.add(10, 10));




//배열 추가
var Users = [{name : '소녀시대', age:20}, {name: '걸스데이', age:22}];
Users.push({name: '티아라',age:23});
console.log('사용자 수 : %d', Users.length );
console.log('첫 번째 사용자 이름 : %s', Users[0].name);



//배열 함수 추가
var Users =[{name: '소녀시대', age:20}, {name: '걸스데이', age:22}];
var add = function(a, b) { return a + b;
}; 
Users.push(add);
console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10, 10));





//배열출력
var Users = [{name: '소녀시대', age:20}, {name: '걸스데이', age:22}, {name:'티아라', age:23}];
console.log('배열 요소의 수 : 용d', Users.length); 
for (var i=0; i<Users.length; i++) {
console.log('배열 요소 행 #' + i + ' : %s', Users[i].name);
}


//배열 forEach 함수 써서 출력하기
console.log('InforEach 구문 사용하기');
Users.forEach(function(item,index){
    console.log('배열 요소 #' + index + '%s', item.name);
});



//배열 함수
// push(object)  : 배열의 끝에 요소를 추가합니다.
// pop() :  배열의 끝에 있는 요소를 삭제합니다.
// unshift() : 배열의 앞에 요소를 추가합니다.
// shift() : 배열의 앞에 있는 요소를 삭제합니다.
// splice(index, removeCount ,objectl)    : 여러 개의 객체를 요소로 추가하거나 삭제합니다.
// slice(index, copyCount)   : 여러 개의 요소를 잘라내어 새로운 배열 객체로 만듭니다.


  

// //callback 함수


// function add(a, b, callback){
//     var result = a + b;
//     callback(result);
//   }
  
//   add(10, 10, function(result){
//     console.log('파라미터로 전달된 콜백 함수 호출');
//     console.log('더하기 (10, 10)의 결과 : %d', result);
//   });


// //함수 안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법
// function multiply(a, b, callback){
//     var result = a*b;
//     callback(result);
  
//     var history = function(){
//       return a + '*' + b + '=' + result
//     }
  
//     return history
//   }
  
//   var multi_history = multiply(10, 10, function(result){
//     console.log(result);
//   });
  
//   console.log('결과 값으로 받은 함수 실행 결과 : ' + multi_history());




  function Person(name, age) { 
    this.name = name;
    this.age = age; 
    }
    Person.prototype.walk = function(speed) {
    console.log(speed + "km 속도로 걸어갑니다. "); 
    }
    var person01 = new Person('소녀시대', 20); 
    var person02 = new Person('걸스데이', 22);
    
    console.log(person01.name + '객체의 walk(10)을 호출합니다. '); 
    person01.walk(10);

    