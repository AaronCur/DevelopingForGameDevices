var lightsabers = {};

lightsabers["Zach"] = 15;
lightsabers["James"] = 10;

function howManyLightsabersDoYouOwn(name)
{

    if(lightsabers.hasOwnProperty(name))
    {
      var quantity = lightsabers[name];
      console.log(quantity);
    }
    else {
      console.log("0");
    }

}
function main()
{

var name = prompt("Enter a name ");

howManyLightsabersDoYouOwn(name);

}
