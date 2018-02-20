var user_selection = prompt("What Calculator mode do you want to use? (B)asic or (A)dvanced?");

if (user_selection == "Basic" || user_selection == "Advanced"){

	var num1 = prompt("Enter the first number");
	var num2 = prompt("Enter the second number");
	
} 

switch (user_selection) {
	case 'a':
	var operator_selector = prompt("What operator would you like to use?: (a)Add (b)Subtract (c)multiplication (d)division");
    break;
    case 'b':
    var power_operator = prompt("Which Advanced function would you like to use? (a)Power (b)Square Root");

}

if (user_selection == 'a'){
    } switch(operator_selector) {
		case 'a' :
		alert(num1+num2);
		break;
		case 'b' :
		alert(num1-num2);
		break;
		case 'c' :
		alert(num1*num2);
		break;
		case 'd' :
		alert(num1/num2);
		break;
		default:
	}

	} else if (user_selection == 'BMI (Imperial)'){
	var height=parseInt(prompt("Enter your height in inches."));
	var weight=parseInt(prompt("Enter your weight in pounds"));
	var BMI=(weight/(height*height))*703;
	var height_metric=parseInt(prompt("Enter your height in Meters."));
	var weight_metric=parseInt(prompt("Enter your weight in Kg"));
	var BMI_metric=(weight/(height*height))*10000;
} else if (user_selection == 'BMI (Metric)'){
	var height_metric=parseInt(prompt("Enter your height in Meters."));
	var weight_metric=parseInt(prompt("Enter your weight in Kg"));
	var BMI_metric=(weight/(height*height))*10000;
}