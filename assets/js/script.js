$(function(){

	function countDrinks(){
		var ranking = [];

		// $("#ranking .ui-content ol")
		// 	.empty();
		var elements = $("#input-prices input");

		for( i = 0; i < elements.length; i++ ){
			if(elements[i].value != ""){
				var element 		= $(elements[i]);
				var drinkName 		= element.prop("title");
				var drinkPrice		= parseFloat(element.value);
				var drinkPrice 		= drinkPrice.replace("," , ".");
				var drinkAmount		= element.prop("ml");
				var drinkAlcohol 	= element.prop("grau");
				var drinkDensity	= drinkAlcohol*drinkAmount;
				var drinkReason		= ((drinkPrice/drinkDensity).toFixed(2));
				ranking.push({ name : drinkName, price : drinkReason});
			}
		}
		console.log(ranking);
		//console.log(values);
		// $("#input-prices input")
		// 	.map(function(){
		// 		if($(this).val()){
		// 			var drinkName 	= $("label[for='"+$(this)
		// 								.attr('id')+"']")
		// 								.text();

		// 			var drinkPrice 	= parseFloat($(this)
		// 								.val()
		// 								.replace(',','.'));

		// 			var drinkAmount = $(this)
		// 								.attr("ml");

		// 			var alcoholic 	= $(this)
		// 								.attr("grau") / 100;

		// 			var density 	= alcoholic*drinkAmount;

		// 			var reason 		= ((drinkPrice/density)
		// 								.toFixed(2));

		// 			ranking.push({ name : drinkName, price : reason }); 
		// 		}
		// });
		// buildRanking(ranking);
	}

	function buildRanking(ranking){
		ranking = ranking.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price)});
		for(drink in ranking){
			var name = ranking[drink].name.toString().replace('.',',');
			var price = ranking[drink].price.toString().replace('.',',');
			$("#ranking .ui-content ol").append("<li>"+name+" R$ "+price+"</li>");
		}
	}

	$("#btn-ranking").on('click', function(e){
		e.preventDefault();
		countDrinks();
	});

});