const { getInfoAboutFilm } = require("../../service/get-info-about-film");
const { expect } = require("chai");

describe("When requesting info about a film response status", () => {
  let response;
  before(async () => {
    response = await getInfoAboutFilm(1);
  });
  it("should have success status code", () => {
    expect(response.statusCode).to.equal(200);
  });
});
