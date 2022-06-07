/* Burger menu */
$('.lines').on('click', function(){
	$('.burger-menu').toggleClass('burger-menu-open');
	$('#line1').toggleClass('line1-rotate');
	$('#line2').toggleClass('line2-display');
	$('#line3').toggleClass('line3-rotate');
});

/* Menu switching Pizza */

/* Ground */
$('.switch-pizza li').on('click', function(){
	$('.pizza-clicked').removeClass('pizza-clicked');
	$(this).addClass('pizza-clicked');
});
/* Goods */
var goods = {
	"1" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/1.png',
		"id" : '1',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"2" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/2.png',
		"id" : '2',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"3" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/3.png',
		"id" : '1',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"4" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/4.png',
		"id" : '2',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"5" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/5.png',
		"id" : '1',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"6" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/6.png',
		"id" : '2',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"7" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/7.png',
		"id" : '1',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"8" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/8.png',
		"id" : '2',
		"price" : '850',
		"size" : ["35", "30", "25"]
	},
	"9" : {
		"name": 'Салями',
		"desc" : 'Салями,картофель и морковь, огурцы огурцы маринованные, моцарелла, цыпленок, ветчина и французский соус',
		"img" : 'assets/img/9.png',
		"id" : '2',
		"price" : '850',
		"size" : ["35", "30", "25"]
	}
};

var out = ``;
for(var key in goods){
	out += `<div class="pizza-block" data-id="${key}">`;
	out += `<div class="pizza-img" style="background: url('${goods[key]["img"]}') no-repeat center top / cover;"></div>`;
	out += `<div class="pizza-name">${goods[key]["name"]}</div>`;
	out += `<div class="pizza-description">${goods[key]["desc"]}</div>`;
	out += `<ul class="pizza-size">`;
	out += `<li pizza-size="35" class="size-clicked"><p>${goods[key]["size"][0]}см</p></li>`;
	out += `<li pizza-size="30"><p>${goods[key]["size"][1]}см</p></li>`;
	out += `<li pizza-size="25"><p>${goods[key]["size"][2]}см</p></li>`;
	out += `</ul>`;
	out += `<div class="pizza-buy-section">`;
	out += `<p class="pizza-price">${goods[key]["price"]}р</p>`;
	out += `<button class="pizza-buy-btn">заказать</button>`;
	out += `</div>`;
	out += `</div>`;
	$('.pizza-list').html(out);
}
/* Pizza size */
$('.pizza-size li').on('click', function(){
	$('.size-clicked').removeClass('size-clicked');
	$(this).addClass('size-clicked');
	console.log($(this).attr('pizza-size'));
});