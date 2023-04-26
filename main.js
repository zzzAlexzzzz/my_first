// console.log('Hello ' + 'world!' + 66);// строка всегда в кавычках
// console.log(666);
// console.log(2+2);
// console.log(9);
// console.log('Добро '+'пожаловать'+'на курс'+' Алексей');

// document.getElementById('one').innerHTML = 'Hello World'

// alert('09.04.23');
// let a = Infinity
// console.log(1/0);

// console.log('stroka'/2);

// console.log(99999999999999999999999n);

// let str1='JOJO'
// let str2="Jojo"
// let str3=`ANIME${str2}`
// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(false==0);

// let nuller=null
// console.log(nuller);

// let a;
// console.log(a);

// typeof
// typeof x 
// typeof(x)
// console.log(typeof'cat');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 10n);
// console.log(typeof undefined);
// console.log(typeof null);

// document.querySelector('#one').innerHTML = 666
// document.querySelector('p').innerHTML = 'wsefuw9efg7'

// let inp = document.querySelector('.text')
// let btn = document.querySelector('.check')
// let out = document.querySelector('.out')


// btn.onclick = function() {
//     console.log('МЫ что-то вывели');
//     let e = inp.value
//     out.innerHTML = e
//     inp.value = ''
// }

// let myhappy = prompt('Когда у тебя др?')


// if(myhappy >= 100){
//     document.querySelector('.out').innerHTML = 'Yes'
// }else{
//     console.log(myhappy);
// 


// let year = prompt('В каком году вышел ходячий замок?')
// if(year <2004){
// console.log('Рано');
// }
// else if(year>2004){
// console.log('Поздно');
// }
// else{
// console.log('Верно');
// }

// // не совсем верная запись
// if(year <2004){
// console.log('Рано');
// }
// if(year>2004){
// console.log('Поздно');
// }
// if(year ==2004){
// console.log('Верно');
// }


// let day = prompt('Сколько днй в неделе?')
// let week = (day == 7) ? 'Отлично' : 'Ты не умеешь считать'
// let Результат = Условие ? если True Первый вариант : иначе Второй вариант
// if(day== 7){
// week =true
// }
// else{
// week = false
// }
// console.log(week);

 //< > - оператор больше или меньше
//>= <= - Больше или равно меньше или равно
//== - Не строгое равно
// === - CТрогое равно
// = - оператор присваивания
// != - не равно

// ||
// true || true = true
// false || true = true
// true || false = true
// false || false = false

// &&
// true && true = true
// false && true = false
// true && false = false
// false && false = false

// let a = 4
// let b =10
// if(a > 5 || a > 5){
//     console.log(b);
// }



// let sr = prompt("больше 15")

// if(sr > 15){
//     console.log('да');
// }
// else if(sr < 15){
//     console.log('нет');
// }
// else{
//     console.log('равно');
// }

// let a = 10
// let b = 5

// if (a + b > 15) {
//     console.log("да");
// }

// else if (a + b == 15){
//     console.log("нет");
// }
// else {
//     console.log("нет");
// }

// let a = 2;
// let b = 2;
// if (a === b) {
//   console.log("равны");
// } else {
//   console.log("не равны");
// }

// let result = (a === b);
// console.log(result);

// let c = 'xxx';
// let d = 2;
// if (c === d) {
//   console.log("равны");
// } else {
//   console.log("не равны");
// }

// let result = (c === d);
// console.log(result);

                                       // Занятие 5. Циклы

// let i = 0;

// while(i<13){
//     console.log(i);
//     i+=3
// }

// ключевое слово do{
//     тело цикла
//     } ключевое слово while(условие)

// ключевое слово for(начало; условие; шаг;){
//     тело цикла

// for(let i = 0; i < 20;i+=2){
//     console.log(i);

// (Если условие == true -> Выполнить тело, Выполнить шаг)
// (Если условие == true -> Выполнить тело, Выполнить шаг)
// (Если условие == true -> Выполнить тело, Выполнить шаг)
// ......

// выполняем начало
// let i = 0;
// Если условие == true -> Выполнить тело, Выполнить шаг
// if(i<3){console.log(i)};i++
// Если условие == true -> Выполнить тело, Выполнить шаг
// if(i<3){console.log(i)};i++
// Если условие == true -> Выполнить тело, Выполнить шаг
// if(i<3){console.log(i)};i++
// Если условие == true -> Выполнить тело, Выполнить шаг
// конец цикла

// let i = 0
// for(;;){
// console.log(i++);
// if(i>10) break;
// console.log(i+10);
// }

// for(let i = 2500; i < 3000; i++){
//     if(i % 2 ==0 )continue;
//     console.log(i);
//     }
 
                                            //  ДЗ  

// let i = 1;
// while(i < 51){
//     console.log(i);
//     i++
// }

// for(let i = 1; i < 51; i++){
//     console.log(i);
// }

// let i = 50;
// while(i > 24){
//     console.log(i);
//     i--
// }

// for(let i = 50; i > 24; i--){
//     console.log(i);
// }

// for(let i = 2500; i < 3000; i++){
//     if(i % 2 ==0 )continue;
//     console.log(i);
//     }

// for(let i = 2500; i < 3002; i++){
//     if(i % 2 == 0 ){
//     console.log(i);
//     }
//     }

                                           //Занятие 6. Switch case

// let a = '1';
// let b = 0;
// switch(+a){
// case b + 1:
// console.log('Выполнится потому как значением +а, будет в точности равно и + 1');
// break
// default:
// console.log('Это не выполнится ');
// }
// let c = + a
// console.log();


// let a = 5;
// switch(a){
// case 12:
// alert('Правильно');
// break

// case 5:
// case 10:
// alert(1)
// break
// alert(2)
// break
// default:
// alert('результат кривой однознанчно')
// }

                                           //ДЗ

// let a = 1;
// let b = +prompt('Введите число от 1 до 4')
// switch(a+b){
//     case 1:
//         alert('нет')
//         break
//     case 2:
//         alert('нет')
//         break
//     case 3:
//         alert('нет')
//         break
//     case 4:
//         alert('да') 
//         break
//     default:
//         alert('Не сработало')       
// }
 

// let a = +prompt('времена года')
// switch(a){
//     case 1:
//     case 2:
//     case 3:
//         alert('зима')
//         break
//     case 4:
//     case 5:
//     case 6:
//         alert('весна')
//         break
//     case 7:
//     case 8:
//     case 9:
//         alert('лето')
//         break
//     case 10:
//     case 11:
//     case 12:
//         alert('осень')
// }

// let a = 'пользователь'
// let b = null
// let c = 'аноним'
// alert(a ?? b ?? c)