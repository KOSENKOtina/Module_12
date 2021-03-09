const { getInfoAboutFilm } = require("../service/get-info-about-film");
const { expect } = require("chai");

describe("When requesting info about a film response", () => {
  let response;
  before(async () => {
    response = await getInfoAboutFilm(1);
  });

  it("should have success status code", () => {
    expect(response.statusCode).to.equal(200);
  });

  it("should have content-type header", () => {
    expect(response.headers["content-type"]).to.exist;
  });

  it("should content-type header equal application/json", () => {
    expect(response.headers["content-type"]).to.equal("application/json");
  });

  it("should have body", () => {
    expect(response.body).to.exist;
  });

  it("should body contain array of characters", () => {
    const parsedBody = JSON.parse(response.body);
    expect(parsedBody.characters).to.be.an("array");
  });
});
