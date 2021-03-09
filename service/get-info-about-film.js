const got = require("got");

async function getInfoAboutFilm(filmNumber) {
  const response = await got(`https://swapi.dev/api/films/${filmNumber}`);
  return response;
}

module.exports = {
  getInfoAboutFilm,
};
