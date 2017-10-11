class SceneManager
{

  constructor()
  {
    this.currentScene = null;  //Reference to the current scene
    this.dictionary = {};  //Dictionary of the scenes
    this.titles = []; //A list of scene titles
    this.index = -1;  //Index variable for each scene
    this.numOfScenes = -1
  }

  //Adds the specified scene (in main) to the dictonary of scenes and appended to the list of scenes
  addScene(scene)
  {
    this.titles.push(scene.title);
    this.numOfScenes++;
    this.dictionary[this.numOfScenes] =scene;

  }

  goToScene(title)
  {
    for (var i = 0; i < this.titles.length; i++)
    {
      if (this.titles[i] == title)
      {
        this.index = i;
      }
    }

    this.currentScene = this.dictionary[this.index];
  }

  goToNextScene()
  {
    this.index++;
    if (this.index > this.numOfScenes)
    {
      this.index = 0;
    }

    this.currentScene = this.dictionary[this.index];

  }


  render()
  {
    this.currentScene.render();
  }









}
