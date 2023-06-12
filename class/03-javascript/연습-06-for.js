const children = ["철수", "영희", "훈이"];
undefined;
for (let i = 0; i < 3; i++) {
  console.log(children[i] + "입니다");
}
//VM411:2 철수입니다
//VM411:2 영희입니다
//VM411:2 훈이입니다
//undefined
for (let i = 0; i < 4; i++) {
  console.log(children[i] + "입니다");
}
//VM429:2 철수입니다
//VM429:2 영희입니다
//VM429:2 훈이입니다
//VM429:2 undefined입니다
undefined;
for (let i = 0; i < children.length; i++) {
  console.log(children[i] + "입니다");
}
//VM476:2 철수입니다
//VM476:2 영희입니다
//VM476:2 훈이입니다
//undefined
children.length;
//3

//반복문 실습 1
let persons = [
  { name: "철수", age: 17 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "그루트", age: 65 },
  { name: "도비", age: 3 },
];
// undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log("성인입니다");
  } else {
    console.log("미성년자입니다");
  }
}
// VM1360:6 미성년자입니다
//VM1360:4 성인입니다
//VM1360:6 미성년자입니다
//VM1360:4 성인입니다
//VM1360:6 미성년자입니다
//undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log(persons[count].name + "님은 성인입니다");
  } else {
    console.log(persons[count].name + "님은 미성년자입니다");
  }
}
//VM1791:6 철수님은 미성년자입니다
//VM1791:4 영희님은 성인입니다
//VM1791:6 도우너님은 미성년자입니다
//VM1791:4 그루트님은 성인입니다
//VM1791:6 도비님은 미성년자입니다
//undefined
