

var user_selection = prompt("What Calculator mode do you want to use? Basic, Advanced, BMI (Imperial) or BMI (Metric)?");

if (user_selection == "Basic"){

	var num1 = parseInt(prompt("Enter your first number"));
	var num2 = parseInt(prompt("Enter your second number"));

	var operator_selector = prompt("What operator would you like to use?: (+)Add (-)Subtract (*)multiplication (/)division");

} else if (user_selection == 'Advanced'){

	var num1 = parseInt(prompt("Enter your first number"));
	var num2 = parseInt(prompt("Enter your second number"));
	var power_operator = prompt("Which Advanced function would you like to use? (a)Power (b)Square Root");

} else if (user_selection == 'BMI (Imperial)'){
	var height=prompt("Enter your height in inches.");
	var weight=prompt("Enter your weight in pounds");
	var BMI=(weight/(height*height))*703;
} else if (user_selection == 'BMI (Metric)'){
	var height_metric=prompt("Enter your height in Meters.");
	var weight_metric=prompt("Enter your weight in Kg");
	var BMI_metric=(weight/(height*height))*10000;
}

if (operator_selector == '+'){
	alert(num1+num2);
} else if (operator_selector == '-'){
	alert(num1-num2);
} else if (operator_selector == '*'){
	alert(num1*num2);
} else if (operator_selector == '/'){
	alert(num1/num2);
} 

if (power_operator =='a'){
	alert(num1 + " to the power of " + num2 + " is " +Math.pow(num1,num2));
} else if (power_operator == 'b'){
	alert("The Square Roots of both numbers are" +Math.sqrt(num1)+ "and" +Math.sqrt(num2));
}

if(BMI<=18.5){
	status='Underweight';
}else if (BMI<=24.9){
	status='Normal';
}else if (BMI<=29.9){
	status='Overweight';
}else{
	status='Obese';
}alert(status);

if(BMI_metric<=18.5){
	status='Underweight';
}else if (BMI_metric<=24.9){
	status='Normal';
}else if (BMI_metric<=29.9){
	status='Overweight';
}else{
	status='Obese';
}alert(status);


