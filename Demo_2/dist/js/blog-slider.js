nonActiveEls = document.getElementsByClassName("blog-post-box__item");

var aLeft = document.getElementById('arrow-left');
var aRight = document.getElementById('arrow-right');

aLeft.addEventListener("click", slide, false);
aRight.addEventListener("click", slide, false);

for (var j=0; j<nonActiveEls.length; j++){
				try{
					nonActiveEls[j].addEventListener("click", clickData, false);
					}catch(e){
							nonActiveEls[j].attachEvent('onclick', clickData);
							}
			}

function slide (e){
	e = e || event;
	var cur = e.target; // присваиваем cur элемент на который нажали (лево/право)
	var flag = 0;
	cur == aRight ? flag = 1 : flag = 0; // проверям лево/право? если право то frag =1
	nonActiveEls = document.getElementsByClassName("blog-post-box__item"); // получаем всю коллекцию нужных элементов
	activeEl = document.getElementsByClassName("blog-post-box__item_active")[0]; // находим активный
	var len = nonActiveEls.length;
	if(activeEl !== nonActiveEls[len - 1] && flag == 1 || activeEl !== nonActiveEls[0] && flag == 0) { // проверяем не крайний ли активный элемент
		for(var i = 0; i < nonActiveEls.length; i++)
		{
			if(nonActiveEls[i] == activeEl) {
     	var previous = nonActiveEls[i - 1]; //находим предыдущий элемент в коллекции
     	var next = nonActiveEls[i + 1]; //находим следующий элемент в коллекции
   		}
		}
	flag == 1 ?	next.classList.add("blog-post-box__item_active") : previous.classList.add("blog-post-box__item_active");
	activeEl.classList.remove("blog-post-box__item_active");
	}
}


function clickData(e) {
	e = e || event;
	var cur = e.target.parentNode;
	activeEl = document.getElementsByClassName("blog-post-box__item_active")[0];
	if (cur !== activeEl) {
		cur.classList.add("blog-post-box__item_active");
		activeEl.classList.remove("blog-post-box__item_active");
	}
}