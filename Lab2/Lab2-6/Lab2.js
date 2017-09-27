function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 var board = "";
}

Ship.prototype.isWorthIt = function()
{
  var totalWeight = (this.crew * 1.5) + this.draft;

  if(totalWeight > 20)
  {
    board = "Ship ready to board"
  }
  else
  {
   board = "Dont board the ship";
  }

  return board;
}

function main()
{
  var titanic = new Ship(5,20);
  console.log(titanic.isWorthIt());

}
