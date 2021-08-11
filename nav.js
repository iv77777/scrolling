let nav = document.querySelector('.nav'),
	vMenu = document.querySelector('.visible-menu'),
	hMenu = document.querySelector('.hidden-menu'),
	burger = document.querySelector('.burger'),
	burgerCount = document.querySelector('.burger-count'),
	breaks = [];

function updateNav() {
	// получаем ширину всего меню
	let navWidth = burger.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth;
	// получаем ширину видимого меню
	let vMenuWidth = vMenu.offsetWidth;

	if (vMenuWidth >= navWidth) {
		breaks.push(vMenuWidth);
		// В скрытое меню в начало добавляем последний елемент из видимого меню
		hMenu.prepend(vMenu.lastElementChild);
		// показуем меню бургер
		burger.classList.remove('hidden');
		// записываем в щочик сколько скрытых пунктов меню
		burgerCount.innerText = breaks.length;
		// заново вызываем ету функцию
		updateNav();
	}
	else {
		// если ширина меню больше последньои точки перелома тогда
		if (navWidth > breaks[breaks.length - 1]) {
			// из массива breaks удаляем последние значение в масиве
			breaks.pop();
			// в конец видимого меню добавляем первый пункт из скрытого меню
			vMenu.append(hMenu.firstElementChild);
			// записываем в щочик сколько скрытых пунктов меню
			burgerCount.innerText = breaks.length;
			// заново вызываем ету функцию
			updateNav();
		}
		// если у скрытого меню нет елементов
		if (breaks.length < 1) {
			burger.classList.add('hidden');
			hMenu.classList.remove('active');
		}
	}
}

//  
burger.addEventListener('click', function () {
	hMenu.classList.toggle('active');
	burger.classList.toggle('active');
});
document.addEventListener('click', function (e) {
	// console.log(!e.target.classList.contains('burger') && !e.target.parentNode.classList.contains('burger'));

	if (!e.target.classList.contains('burger') && !e.target.parentNode.classList.contains('burger')) {
		if (hMenu.classList.contains("active")) {
			hMenu.classList.toggle('active');
			burger.classList.toggle('active');
		}
	}

	// console.log(e.target);
	// console.log(e);
	// console.log(e.target.parentNode);
	// hMenu.classList.toggle('active');
	// burger.classList.toggle('active');
});
// document.addEventListener('click', function () {
// 	hMenu.classList.remove('active');
// 	burger.classList.remove('active');
// });

// при изминении ширины екрана запускаем функцию updateNav
window.addEventListener('resize', updateNav);

// после загрузки всего дом дерева запускаем функцию updateNav
document.addEventListener('DOMContentLoaded', updateNav);


