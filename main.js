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

                                               //  Занятие 7. Функции


 // function decloration
//
// ключевое слово function название функции(параметры){
//     тело функции
//     }
//     function one(){
//     console.log('Наша первая осознанная функция');
//     }


// let i = 0
// function one(){
// console.log('Наша первая осознанная функция');
// alert('Ты нажал кнопку ' + i + ' раз')
// i+=1
// }

// let btn = document.querySelector('.check')

// btn.onclick = one


// let a = 12
// let b = 118

// function multiply(){
// return a + b

// }
// multiply()


// let a = prompt('Ваше имя?')
// function mlt(x,y){
// return x + y
// }
// let c = mlt('Добро пожаловать ', a )
// console.log(c);


// function decloration
// function one(){
//     console.log('Это function decloration');
    
//     }
//     // function expreshen
//     let two = function(){
//     console.log('Это function expreshen');
//     }
//     // Стрелочная функция
//     let there = () =>{
//     console.log('Стрелочная функция');
//     }

                                                                // ДЗ


// let a = 'кнопку'
// function one(){
//     alert('ты нажал ' + a)
// }
// let btn = document.querySelector('.plus')
// btn.onclick = one



// let plus = function(){
//     let a = +document.querySelector('.num1').value;
//     let b = +document.querySelector('.num2').value;
//     alert(a + b)
    
// }
// let btn = document.querySelector('.plus')
// btn.onclick = plus


// let minus = function(){
//     let a = +document.querySelector('.num1').value;
//     let b = +document.querySelector('.num2').value;
//     alert(a - b)

// }
// let btn2 = document.querySelector('.minus')
// btn2.onclick = minus

// let umnoj = function(){
//     let a = +document.querySelector('.num1').value;
//     let b = +document.querySelector('.num2').value;
//     alert(a * b)

// }
// let btn3 = document.querySelector('.umnoj')
// btn3.onclick = umnoj

// let delenie = function(){
//     let a = +document.querySelector('.num1').value;
//     let b = +document.querySelector('.num2').value;
//     alert(a / b)

// }
// let btn4 = document.querySelector('.delenie')
// btn4.onclick = delenie

                                                  //  Занятие 8. DOM

// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// btn.onclick = function (){
// body.classList.toggle('bodys')
// btn.style.color = 'white'
// }

// let genre = document.querySelectorAll('.genre')
// for(let i = 0; i<genre.length;i++){
// genre[i].onclick = function(){
// let shop = document.querySelector('.shop').value
// let price = this.getAttribute('data')
// let out = document.querySelector('.out')
// out.innerHTML = shop * price
// console.log(shop * price);

// shop.innerHTML = ''

// }

                                                                 //ДЗ

// const btn = document.querySelector('.plus')
// const ele = document.querySelector('.element')
// btn.onclick = function (){
//     ele.classList.add('wid')
//     btn.classList.toggle('wid')
//     btn.classList.toggle('bod')
//     btn.classList.toggle('col')
// }



                                   // Занятие 9. Массивы




// let a = 'Anime'
// let b = true
// let c = 'Ты добавил это через переменную';

// let a = ['a','b','c','d']
// const b = [1,2,3,4,5,6,7,8]

// console.log(a.length);
// console.log(a.push('qwe','asdd', c));
// console.log(a.push(true));

// console.log(a);
// b.push('Тимур')

// console.log(b);
// b.pop()
// console.log(b.pop());
// console.log(b);
// b.splice(3, 4, 'Ничего себе')
// console.log(b);

// console.log(b);

// let a = [1,2,3,4,5]

// let b = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]

// console.log(b[2][1]);

// for(let i = 0; b.length>i; i++){
// let c = b[i]// с = массив 123
// // console.log(b[i]);
// for(let j = c.length -1; j>=0;j--){
// console.log(c[j]);
// }

// }

// for(let i = 0; b.length>i; i++){
//     for(let j = 0; j<b[i].length ;j++){
//     console.log(b[i][j]);
//     }
    
//     }

// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//     ]
    
    // for(let i = 0; b.length>i; i++){
    // let c = b[i]// с = массив 123
    // // console.log(b[i]);
    // for(let j = c.length -1; j>=0;j--){
    // console.log(c[j]);
    // }
    
    // }
    
    // let out = '';
    // for(let i = 0; b.length>i; i++){
    // for(let j = 0; j<b[i].length;j++){
    // console.log(b[i][j]);
    // if(b[i][j]>4){
    // out += b[i][j] + ''
    // out+='<br> '
    // }
    // }
    
    // }
    // document.querySelector('.out').innerHTML = out


                                                          //  ДЗ

    // let a = [1,2,3,4,5,6,7,8,9,10,11,12]
    // console.log(a);
    // console.log(a[4]);


    // function mas (){
    //     document.querySelector('.one').innerHTML = a[4]
    // }


    // function mas (){
    //     a.splice(0,1)
    //     a.splice(1,1)
    //     a.splice(2,1)
    //     a.splice(3,1)
    //     a.splice(4,1)
    //     a.splice(5,1)
    //     document.querySelector('.one').innerHTML = a
    // }

    // function mas (){
    //     a.splice(1,1)
    //     a.splice(2,1)
    //     a.splice(3,1)
    //     a.splice(4,1)
    //     a.splice(5,1)
    //     a.splice(6,1)
    //     document.querySelector('.one').innerHTML = a
    // }




                   //здесь не понимаю как вывести на страницу по кнопке
    // function mas (){
    //     for(let i = 0; a.length > i; i++)
    //     if(i % 2 == 0 )
    //     console.log(i);
    // }
    
    // document.querySelector('.one').innerHTML = i



//     let a = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ]
// let one = '';
// function mas (){
//     for(let i = 0; a.length > i; i++){
//     let c = a[i]
//     for(let j = c.length - 1; j >= 0; j--){
//         console.log(c[j]);
//         one += a[i][j] + ''
//     }
//     }
//     document.querySelector('.one').innerHTML = one
//     }



                                              // Занятие 10. API


// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=477d53b8451ca5c93b7fae37eb431d1b';)
// .then(function(resp){return resp.json()})
// .then(function(data){
// document.querySelector('.city-name').textContent = data.name
// document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
// console.log(data);
// }) 

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.17&lon=104.17&appid=477d53b8451ca5c93b7fae37eb431d1b';)
// .then(function(resp){return resp.json()})
// .then(function(data){
// document.querySelector('.city-name').textContent = data.name
// document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
// document.querySelector('.weather').textContent = data.weather[0]['description']
// document.querySelector('.icon').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
// console.log(data);
// })

                                                      // ДЗ



// fetch('https://api.openweathermap.org/data/2.5/weather?lat=58.50&lon=56.56&appid=a86de39d5ad5084bae32135e34c9c422')
// .then(function(resp){return resp.json()})
// .then(function(data){
//     document.querySelector('.one').textContent = data.name
//     document.querySelector('.temp').textContent = Math.round((data.main.temp -273)) + '°C'
//     document.querySelector('.weather').textContent = data.weather[0]['description']
//     document.querySelector('.icon').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
//     document.querySelector('.wind').textContent = data.wind.speed + 'м\с'
//     document.querySelector('.humidity').textContent = data.main.humidity
//     document.querySelector('.country').textContent = data.sys.country
//     document.querySelector('.sunrise').textContent = data.sys.sunrise
//     document.querySelector('.sunset').textContent = data.sys.sunset
//     console.log(data);
// })

                                                           // Занятие 11. Promise

// let a = new Set();
// a.add(666)
// console.log(a);


// let a = new Set();
// let b = [1,2,3,4,5,6,6,7,7,7,7,7,7,7,7,7,7,8]
// a.add('Строка')

// a.add('строка')
// a.add(12)
// a.add(43)
// // a.clear()
// // a.delete('Строка1')

// a.add(82)

// console.log(a);
// console.log(a.has('Строка'))
// console.log(a.size);
// for(let i of a) {
// console.log(i);
// }


// let c = 24
// let d = (1 +'2') * 2

// let b = [c,d]

// let a = new Set(b);

// for(let i of a) {
// console.log(i);
// }

// let b = [1,2,3,4,5,6,6,7,7,7,7,7,7,7,7,7,7,8]

// let a = new Set(b);

// for(let i of a) {
// console.log(i);
// }
// for(let i = 0; i<b.length;i++){
// console.log(b[i]);
// }

// for(let key in b){
// console.log(b[key]);
// }

// for(let key of b){
// console.log(key);
// }

                                                                 // ДЗ


// let a = new Set()
// a.add('e')
// a.add('r')
// a.add('i')
// a.add('k')
// a.add('t')
// a.add('h')
// a.add('e')
// a.add('b')
// a.add('e')
// a.add('s')
// a.add('t')
// console.log(a);


// let inp = document.querySelector('.text')
// let btn = document.querySelector('.plus')
// let one = document.querySelector('.one')
// btn.onclick = function() {
//     let e = inp.value
//     one.innerHTML = e 
// }
 

let a = [0,1,2,3,4,5,5,5,6,7,8,9]
let b = new Set(a)
console.log(b);

// let inp = document.querySelector('.text')
// let btn = document.querySelector('.plus')
// let one = document.querySelector('.one')

// btn.onclick = function() {
//     let c = inp.value
//     console.log(b.has(c));   // не могу понять как проверить масив
//     one.innerHTML = c

// }



let btn = document.querySelector('.plus')
let one = document.querySelector('.one')

btn.onclick = function(){
    for(let i of b) {
        console.log(i);
    }
}
