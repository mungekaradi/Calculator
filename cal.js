function pick(val)
{
    document.getElementById('Cal').value += val;
}
function solve()
{
   let x = document.getElementById('Cal').value;
   let y = eval(x);
   document.getElementById('Cal').value = y;
}
function clr()
{
    document.getElementById('Cal').value=" ";
}