class TouchTest
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor()
  {

  }
  is_touch_device()
  {
    return 'ontouchstart' in window;
  }
}
