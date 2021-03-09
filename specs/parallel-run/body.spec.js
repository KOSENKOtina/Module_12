const { getInfoAboutFilm } = require("../../service/get-info-about-film");
const { expect } = require("chai");

describe("When requesting info about a film response body", () => {
  let response;
  before(async () => {
    response = await getInfoAboutFilm(1);
  });

  it("should exist", () => {
    expect(response.body).to.exist;
  });

  it("should contain array of characters", () => {
    const parsedBody = JSON.parse(response.body);
    expect(parsedBody.characters).to.be.an("array");
  });
});
