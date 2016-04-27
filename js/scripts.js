$(function(){
	
	$("form").on("submit", function(event){
		event.preventDefault();
		
		var first_num = +$("#first_num").val(),
			second_num = +$("#second_num").val(),
			operator = $("#operators").val(),
			total = 0;
		
		if (operator === "add") {
			total = first_num + second_num;
		} else if (operator === "minus") {
			total = first_num - second_num;
		} else if (operator === "multiply") {
			total = first_num * second_num;
		} else if (operator === "divide") {
			total = first_num / second_num;
		} else {
			$("#display").text("Error");
		}
		
		$("#display").text(total);
		
	});
	
});