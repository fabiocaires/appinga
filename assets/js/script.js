$(function(){

	function countDrinks(){

		var ranking = [];
		var elements = $("#input-prices input");

		$("#page-2 ol").empty();

		for( i = 0; i < elements.length; i++ ){
			if(elements[i].value != ""){
				var element 		= $(elements[i]);
				var drinkName 		= element.prop("title");
				var drinkPrice		= element.val();
					drinkPrice 		= drinkPrice.replace("," , ".");
				var drinkAmount		= element.data("ml");
				var drinkAlcohol 	= element.data("grau") / 100;
				var drinkDensity	= drinkAlcohol*drinkAmount;
				var drinkReason		= ((drinkPrice/drinkDensity).toFixed(2));

				ranking.push({ name : drinkName, price : drinkReason});
			}
		}

		buildRanking(ranking);
	}

	function buildRanking(ranking){

		ranking = ranking.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price)});

		for(drink in ranking){
			var name = ranking[drink].name.toString().replace('.',',');
			var price = ranking[drink].price.toString().replace('.',',');
			$("#page-2 ol").append("<li>"+name+" R$ "+price+"</li>");
			$("#page-1").hide();
			$("#page-2").show();
		}
	}

	$("#btn-ranking").on('click', function(e){
		e.preventDefault();
		countDrinks();
	});

});