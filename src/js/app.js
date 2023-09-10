import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load().then((saving) => saving, (error) => {
  throw new Error(error);
});
