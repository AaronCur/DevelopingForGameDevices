var a = {'Mike': 'aye' , 'Joe' : 'aye' , 'Peter' : 'aye', 'Johnson' : 'aye'}
var b = {'Mike' : 'aye', 'Joe' : 'aye' , 'Peter' : 'nay', 'Johnson' : 'aye'}


function checkReady(array)
{
  var fire = '';
  var ready = true;

    for(var name in array)
    {
      if(array.hasOwnProperty(name))
      {
        fire = array[name];

      }
      if(fire ==='nay')
      {

        console.log('Shiver me timbers!');
        ready = false;
        break;

      }
      else {
        ready = true;
      }

    }

    if(ready === true)
    {
      console.log('Fire!');
    }


}
function main()
{

checkReady(b);

}
