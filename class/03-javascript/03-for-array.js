const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜양" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// undefined
for (let k = 0; k < fruits.length; k++) {
  console.log(fruits[k].number + " " + fruits[k].title);
}
// VM42:2 1 레드향
// VM42:2 2 샤인머스켓
// VM42:2 3 산청딸기
// VM42:2 4 한라봉
// VM42:2 5 사과
// VM42:2 6 애플망고
// VM42:2 7 딸기
// VM42:2 8 천혜양
// VM42:2 9 과일선물세트
// VM42:2 10 귤
// undefined
for (let k = 0; k < fruits.length; k++) {
  console.log(`${fruits[k].number} ${fruits[k].title}`);
}
// VM286:2 1 레드향
// VM286:2 2 샤인머스켓
// VM286:2 3 산청딸기
// VM286:2 4 한라봉
// VM286:2 5 사과
// VM286:2 6 애플망고
// VM286:2 7 딸기
// VM286:2 8 천혜양
// VM286:2 9 과일선물세트
// VM286:2 10 귤
// undefined
for (let k = 0; k < fruits.length; k++) {
  console.log(`과일 차트${fruits[k].number}위는 ${fruits[k].title}입니다`);
}
// VM409:2 과일 차트1위는 레드향입니다
// VM409:2 과일 차트2위는 샤인머스켓입니다
// VM409:2 과일 차트3위는 산청딸기입니다
// VM409:2 과일 차트4위는 한라봉입니다
// VM409:2 과일 차트5위는 사과입니다
// VM409:2 과일 차트6위는 애플망고입니다
// VM409:2 과일 차트7위는 딸기입니다
// VM409:2 과일 차트8위는 천혜양입니다
// VM409:2 과일 차트9위는 과일선물세트입니다
// VM409:2 과일 차트10위는 귤입니다
// undefined
