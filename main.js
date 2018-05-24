var data = {
  time: 0,
  hub: {
    heroes: [],
    quests: []
  }
}

var Hero = class Hero {
  constructor() {
    this.name = Hero.generateName(this);
    this.level = 1;
    this.xp = 0;
  }

  static generateName(hero) {
    return "Alex";
  }
}

class Game {
  constructor(browserWindow, data) {
    this.window = browserWindow;
    this.data = data;

    window.setInterval(this.gameInterval, 100);
  }

  gameInterval() {
    data.time = data.time + 0.1;
    for (quest in data.quests) {
      quest.update();
    }
    // document.getElementsByClassName('time')[0].innerHTML = data.time;
  }
}

var game = new Game(window, data);


// 1. Pick hero class
// 2. Present quest to click
// 3. Clicking the quest kicks off a progress bar
// 4. On completion of the progress bar the results are presented
// 5. Mark increase in gold/xp/whatever
// 6. Present new quest
// 7. Repeat this ad nauseum until next stage unlock.
//           Idk what that is yet, but its a good start.
