var firstName = {A : 'Alpha' , B : 'Beta' , C : 'Cache', D : 'Delta'}
var surName = {A : 'Analogue', B : 'Bomb' , C : 'Catalyst', D : 'Destroyer'}

function checkAlias(first, sur)
{

  var alias = '';

  if (/^[A-Za-z]+$/.test(first) && /^[A-Za-z]+$/.test(sur))
  {
    alias = firstName[first.charAt(0).toUpperCase()];
    alias = alias + ' ' + surName[sur.charAt(0).toUpperCase()];
  }
  else
 {
      alias = 'Your name must start with a letter from A - Z'
  }

  return alias
  
}
function main()
{
  var first = prompt("Enter first name ");
  var sur = prompt("Enter second name ");

  console.log(checkAlias(first,sur));

}
