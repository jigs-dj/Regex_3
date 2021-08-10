function cal()
{
	var call = document.getElementById('calls').value;
	var msg = document.getElementById('msgs').value;
	var calls_cost;
	var msg_cost;
	var total;
	if(call<=50)
	{
		calls_cost = (call*50)/100;
	}
	else if(call<=150 && call>50)
	{
		calls_cost = ((50*50)+((call-50)*70))/100;
	}
	else if(call<=300 && call>150)
	{
		calls_cost = ((50*50)+(100*70)+((call-150)*85))/100;
	}
	else
	{
		calls_cost = ((50*50)+(100*70)+(150*85)+((call-300)*95))/100;
	}

	if(msg<=50)
	{
		msg_cost = 0;
	}
	else if(msg<=200 && msg>50)
	{
		msg_cost = ((50*0)+((msg-50)*25))/100;
	}
	else if(msg<=400 && msg>200)
	{
		msg_cost = ((50*0)+(150*25)+((msg-200)*40))/100;
	}
	else
	{
		msg_cost = ((50*0)+(150*25)+(200*40)+((msg-400)*45))/100;
	}

	total = calls_cost+msg_cost;
	alert("Charges for call:" +calls_cost+ "\nCharges for SMS:" +msg_cost+ "\nTotal Charges:" +total);
}