$(function(){

	function calcularBebidas(){
		$("#ranking .ui-content ol").empty();
		$("#entrada .ui-content input").each(function(){
			nomeBebida = $("label[for='"+$(this).attr('id')+"']").text();
			precoBebida = parseFloat($(this).val().replace(',','.'));
			qtdBebida = $(this).attr("ml");
			teorAlcool = $(this).attr("grau") / 100;
			mlAlcool = teorAlcool*qtdBebida;
			razaoAlcool = (precoBebida/mlAlcool).toFixed(2);
			razaoAlcool = razaoAlcool.toString().replace('.',',');
			$("#ranking .ui-content ol").append("<li>"+nomeBebida+" R$ "+razaoAlcool+"</li>");
		});
	}

	$("#btn-calcular").click(function(){
		calcularBebidas();
	});
});