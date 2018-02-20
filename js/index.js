
var user_selection = prompt("What Calculator mode do you want to use? Basic, Advanced, BMI or Trip Calculator?");

// Prompt Menu

if (user_selection == "Basic"){

	var num1 = parseInt(prompt("Enter your first number"));
	var num2 = parseInt(prompt("Enter your second number"));

	var operator_selector = prompt("What operator would you like to use?: (+)Add (-)Subtract (*)multiplication (/)division");

} else if (user_selection == 'Advanced'){

	var num1 = parseInt(prompt("Enter your first number"));
	var num2 = parseInt(prompt("Enter your second number"));
	var power_operator = prompt("Which Advanced function would you like to use? (a)Power (b)Square Root");

} else if (user_selection == 'BMI'){
	var bmi_operator = prompt("Which Units would you like to use? (a)Metric, (b)Imperial");

}else{
	alert("Invalid Option. Please try again by refereshing the page!");
}

//  Operators

if (operator_selector == '+'){
	alert(num1+num2);
} else if (operator_selector == '-'){
	alert(num1-num2);
} else if (operator_selector == '*'){
	alert(num1*num2);
} else if (operator_selector == '/'){
	alert(num1/num2);
} 

// Powers

if (power_operator =='a'){
	alert(num1 + " to the power of " + num2 + " is " +Math.pow(num1,num2));
} else if (power_operator == 'b'){
	alert("The Square Roots of both numbers are" +Math.sqrt(num1)+ "and" +Math.sqrt(num2));
}


// Bonus 

if (bmi_operator == "a"){
	var height=parseInt(prompt("Enter your height in inches."));
	var weight=parseInt(prompt("Enter your weight in pounds"));
	alert("Your BMI Is" + (703*weight)/(Math.pow(height,2)));
} else if (bmi_operator == "b"){
	var heightmetric=parseInt(prompt("Enter your height in Meters."));
	var weightmetric=parseInt(prompt("Enter your weight in Kg"));
	alert("Your BMI Is" + (10000*weightmetric)/(Math.pow(height,2)));
} 



