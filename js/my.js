// 1) Найти все div и вывести их количество
// 2) Все дивы без текста заполнить строкой текста
// 3) Найти div с классом red и убедиться что это действительно div
// 4) Внутри div создать p с текстом и img в картинку добавить класс и ссылку на картинку
// 5) Удалить предпоследний элемент в body
// 6) Получить кол-во узлов в body
// 7) Удалить все узлы типа text
// 8) Создать узел типа комментарий и вставить его в начало body 
// 9) Достать текст из комментария
// 10) Удалить все узлы в body


// ---------1--------????????????????????????
// var div1 = document.querySelectorAll('div');
// for (var i = 0; i <= div1.length; i++){
//     var doc = div1[i];
// console.log(doc.length);
// }


// ---------2--------????????????????????????????
// var div1 = document.querySelectorAll('.test');
// for(var i = 0; i <=div1.length; i++){
//     var el = div1[i];
//     el.appendChild(document.createTextNode('text'));
// console.log(el);
// }

// ---------3--------
// var div1 = document.querySelector('.red');
// console.log(div1);
// if (div1 = document.querySelector('div')){
//     console.log(true);
// };

// ---------4--------
// var div1 = document.querySelector('div');
// div1.insertAdjacentHTML("afterBegin", "<p>text<a><img></img></a></p>");
// img1 = document.querySelector('img');
// img1.setAttribute('class', 'img')
// img1.setAttribute('src', 'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg')
// console.log(div1);

// ---------5--------??????????????????????
// var div1 = document.body.children[24];
// console.log(div1.remove());
// console.log(document.querySelectorAll('div'));

// ---------6--------
// var doc = document.body.children.length;
// console.log(doc)

// ---------7--------?????????????????????
// var elem = document.body;
// elem.remove(textContent);
// console.log(elem)
// for (var i = 0; i < document.body.childNodes.length; i++) {
//     alert( document.body.childNodes[i].data );
//   }

// ---------8--------
// bod = document.body;
// var doc = document.createComment('sssss');
// bod.prepend(doc);
// console.log(bod);

// ---------9--------
// var nod = document.body.childNodes[0];
// console.log(nod);

// ---------10--------
// var elem = document.body;
// elem.remove();
// console.log(elem)