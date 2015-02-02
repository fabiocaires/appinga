$(function(){

	function countDrinks(){
		var ranking = [];

		$("#ranking .ui-content ol")
			.empty();

		$("#entrada .ui-content input")
			.each(function(){
				if($(this).val()){
					var drinkName 	= $("label[for='"+$(this)
										.attr('id')+"']")
										.text();

					var drinkPrice 	= parseFloat($(this)
										.val()
										.replace(',','.'));

					var drinkAmount = $(this)
										.attr("ml");

					var alcoholic 	= $(this)
										.attr("grau") / 100;

					var density 	= alcoholic*drinkAmount;

					var reason 		= ((drinkAmount/density)
											.toFixed(2));

					ranking.push({ name : drinkName, price : drinkPrice }); 
				}
		});
		buildRanking(ranking);
	}

	function buildRanking(ranking){
		ranking = ranking.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price)});
		for(drink in ranking){
			var name = ranking[drink].name.toString().replace('.',',');
			var price = ranking[drink].price.toString().replace('.',',');
			$("#ranking .ui-content ol").append("<li>"+name+" R$ "+price+"</li>");
		}
	}

	$("#btn-calcular").click(function(){
		countDrinks();
	});

});