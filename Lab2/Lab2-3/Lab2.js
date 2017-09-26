function averageMarks(gradesArray)
{
  var total = 0;
  var mean = 0;
  var count =0;

    for(var i = 0; i < gradesArray.length ; i++)
    {
      count = count +1;
      total = total + gradesArray[i];
    }

    mean = total / count;
    console.log(Math.floor(mean));
}
function main()
{

var gradesArray = [1,2,3,4,5,6];

averageMarks(gradesArray);

}
