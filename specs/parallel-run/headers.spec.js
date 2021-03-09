const { getInfoAboutFilm } = require("../../service/get-info-about-film");
const { expect } = require("chai");

describe("When requesting info about a film response headers", () => {
  let response;
  before(async () => {
    response = await getInfoAboutFilm(1);
  });

  it("should have content-type header", () => {
    expect(response.headers["content-type"]).to.exist;
  });

  it("should content-type header equal application/json", () => {
    expect(response.headers["content-type"]).to.equal("application/json");
  });
});
