// // ****************************************************************************************
// // Код которий делает плавний скрол по якорям методом scrollIntoView()

// // находим все елементы "a" у которых href начинается с "#"
// const anchors = document.querySelectorAll('a[href*="#"]');

// // Проходимся по всех елементах
// for (let anchor of anchors) {
// 	// для каждого родитиля етого елемента устанавливаем слушатель клик
// 	anchor.parentNode.addEventListener("click", function (event) {
// 		// Отменяем стандартное повидения сылок при клики 
// 		event.preventDefault();
// 		// Получаем значения атрибута "href" 
// 		const blockID = anchor.getAttribute('href');

// 		// находим елемент "blockID" для которого визываем метод scrollIntoView()
// 		// который прокручивает текущий контейнер родителя элемента, 
// 		// так, чтобы этот элемент, был видим пользователю.
// 		document.querySelector('' + blockID).scrollIntoView({
// 			// Определяет анимацию скролла
// 			behavior: "smooth",

// 			// Вертикальное выравнивание:
// 			//  верхняя граница элемента будет выровнена вверху видимой части окна прокручиваемой области.
// 			block: "start"
// 			// верхняя граница элемента будет выровнена по центру видимой части окна прокручиваемой области.
// 			// block: "center"

// 		});
// 	});
// }
// ****************************************************************************************
// ****************************************************************************************
// Код которий делает плавний скрол по дата атрибутам
// дает можлывисть устанавливать до скольки делать прокрутку

// находим только те елементы "menu__link" у которых есть дата атрибут [data-goto]
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

// если есть такие елементы
if (menuLinks.length > 0) {
	// для каждого елемента
	menuLinks.forEach(menuLink => {
		// устанавлюваум события клик, при котором вызываем функцию onMenuLinkClick
		menuLink.addEventListener("click", onMenuLinkClick)
	});

	// то што будем делать при клики на елмент
	function onMenuLinkClick(e) {
		// получаем елемент по которому кликнули
		const menuLink = e.target;

		// если заполнин дата атрибут и есть елемент на который ссылается етот дата атрибут тогда
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			// находим елемент на который ссылается етот дата атрибут
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			// получаем положения елемента от верха страницы + количество прокручаных px по вертикали - отнемаем высоты шапки(heder)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			// Свойство scrollTop плавно прокручувает страницу документа до указанных координат.
			window.scrollTo({
				// Прокрутка документа до указанных координат
				top: gotoBlockValue,
				// Определяет анимацию скролла
				behavior: "smooth"
			});

			// Отменяем стандартное повидения сылок при клики 
			e.preventDefault();


			// console.log(gotoBlock.getBoundingClientRect().top, "положения елемента от верха");
			// console.log(pageYOffset, "количество прокручаных px по вертикали");
			// console.log(gotoBlock.getBoundingClientRect().top + pageYOffset, "положения елемента от верха страницы + количество прокручаных px по вертикали");
			// console.log(gotoBlockValue, "положения елемента от верха страницы + количество прокручаных px по вертикали - header");
			// console.log("pageYOffset:", pageYOffset);
			// console.log("*********************************************");
		}








		// console.log(menuLinks);
	}
}


