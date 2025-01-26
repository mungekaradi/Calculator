// display the value in input box.
function pick(val)
{
    document.getElementById('Cal').value += val;
}
// solves the equation.
function solve()
{
   let x = document.getElementById('Cal').value;
   let y = eval(x);
   document.getElementById('Cal').value = y;
}
// clears the input box.
function clr()
{
    document.getElementById('Cal').value=" ";
}
