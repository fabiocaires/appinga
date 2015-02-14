(function(){

	document.addEventListener("DOMContentLoaded", function() { 

		function countDrinks(event){
			event.preventDefault();
			var ranking = [];
			var elements = document.querySelectorAll("#input-prices input");


			var rankingResult = document.querySelectorAll("#page-2 ol li");
			
			for( i = 0; i < rankingResult.length; i++ ){
				rankingResult[i].remove(i);
			}

			// precisa arrumar essa parte, a leitura dos atributos ml, grau
			// não retornam números, mesmo que rode um parseInt() a conta não funcioca

			for( i = 0; i < elements.length; i++ ){
				if(elements[i].value != ""){
					var element 		= elements[i];
					var drinkName 		= element.getAttribute("title");
					var drinkPrice		= element.value;
						drinkPrice 		= drinkPrice.replace("," , ".");
					var drinkAmount		= element.getAttribute("ml");
					var drinkAlcohol 	= element.getAttribute("grau")) / 100;
					var drinkDensity	= drinkAlcohol*drinkAmount;
					console.log(drinkAmount+" "+drinkAlcohol+" "+drinkDensity);
					var drinkReason		= ((drinkPrice/drinkDensity).toFixed(2));

					ranking.push({ name : drinkName, price : drinkReason});
				}
			}
			console.log(ranking);
			// btnRanking(ranking);
		}

		// function buildRanking(ranking){

		// 	ranking = ranking.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price)});

		// 	for(drink in ranking){
		// 		var name = ranking[drink].name.toString().replace('.',',');
		// 		var price = ranking[drink].price.toString().replace('.',',');
		// 		var list = document.querySelector("#page-2 ol");
		// 		var elementList = document.createElement("li");
		// 		var contentElementList = document.createTextNode(name+" R$ "+price);
		// 		elementList.appendChild(contentElementList);
		// 		list.appendChild(elementList);
		// 	}
		// 	var page1 = document.getElementById("#page-1");
		// 	var page2 = document.getElementById("#page-2");
		// 	page1.style.display = "none";
		// 	page2.style.display = "block";
		// }

		var btnRanking = document.getElementById("btn-ranking");
		btnRanking.addEventListener("click", countDrinks, false);
	});

})();