var lightsabers = {};

lightsabers["Zach"] = 15;
lightsabers["James"] = 10;

function howManyLightsabersDoYouOwn(name)
{

    if(lightsabers.hasOwnProperty(name))
    {
      var quantity = lightsabers[name];
    }
    else {
      quantity = 0;
    }

    return quantity;
}
function main()
{

var name = prompt("Enter a name ");

console.log(howManyLightsabersDoYouOwn(name));

}
