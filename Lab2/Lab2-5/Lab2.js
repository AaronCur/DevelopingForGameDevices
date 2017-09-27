var firstName = {A : 'Alpha' , B : 'Beta' , C : 'Cache', D : 'Delta'}
var surName = {A : 'Analogue', B : 'Bomb' , C : 'Catalyst', D : 'Destroyer'}

function checkAlias(first, sur)
{

  var alias = '';

  alias = firstName[first.charAt(0).toUpperCase()];
  alias = alias + ' ' + surName[sur.charAt(0).toUpperCase()];


  return alias;

}
function main()
{
  var first = prompt("Enter a name ");
  var sur = prompt("Enter a name ");

  console.log(checkAlias(first,sur));

}
