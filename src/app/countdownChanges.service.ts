export class countdown
{
  inactiveTimesChanged = 0;
  activeTimesChanged = 0;
  CountChangeToInactive()
  {
    this.inactiveTimesChanged++;
  }
  CountChangeToActive()
  {
    this.activeTimesChanged++;
    console.log("Lets c dude",this.activeTimesChanged);
  }
}