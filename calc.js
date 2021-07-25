
function attach(val)
{
	document.getElementById("display").value+=val;
}
function clr()
{
	document.getElementById("display").value='';
}
function answer()
{
	var exp=document.getElementById("display").value;
	var result=eval(exp)
	document.getElementById('display').value=result;
}