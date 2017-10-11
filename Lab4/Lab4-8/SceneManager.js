class SceneManager
{

  /**
   * Constructor function:which is called when the SceneManager is constructed
   * initialises a dictionary (dictionary) and a list (titles) which holds a reference to the scene objects
   * initialises an index to go through the list and a numberOfScenes to hold the max number of scenes
   */
  constructor()
  {
    this.currentScene = null;  //Reference to the current scene
    this.dictionary = {};  //Dictionary of the scenes
    this.titles = []; //A list of scene titles
    this.index = -1;  //Index variable for each scene
    this.numOfScenes = -1
  }

  /**
   * addScene function , passes in a scene from the main
   * adds it to the titles library
   * increments the numOfScenes variable
   * adds the scene object to the dictionary
   * @param {Object} scene -passes in the scene object
   */
  addScene(scene)
  {
    this.titles.push(scene.title);
    this.numOfScenes++;
    this.dictionary[this.numOfScenes] =scene;

  }
  /**
   * Function that when called goes to the the title of the scene whihc is passed in
   * This is called once in the main to display the initial scene
   * Example : 'PlayScene' is passed in.For loop searches through the library, when it finds it sets this scene
   * as the current scene
   * @param {String} title -passes in the title of the scene object 
   */
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
  /**
   * Function that when called goes to the the next scene which is in the list
   * This is called in the main when a mouse click is detected
   */
  goToNextScene()
  {
    this.index++;
    if (this.index > this.numOfScenes)
    {
      this.index = 0;
    }

    this.currentScene = this.dictionary[this.index];

  }

  /**
   * render function which will call the render function of the current scene
   */
  render()
  {
    this.currentScene.render();
  }









}
