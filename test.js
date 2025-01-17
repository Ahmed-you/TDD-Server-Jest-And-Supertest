const supertest = require("supertest");
const router = require("./src/router");
test("Initialize", () => {
  let num = 2;
  expect(num).toBe(2);
});

test("'home router returns a status code of '200'", (done) => {
  expect.assertions(1);
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.text).toBe("Hello");
      done();
    });
});

test("elephant Router Returns A status code of '404", (done) => {
  expect.assertions(1);
  supertest(router)
    .get("/elephants")
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      if (err) return done(err);

      expect(res.text).toBe("unknown uri");
      done();
    });
});

test("/Get Blog request Returns A status code of '200 with data object", (done) => {
  expect.assertions(1);

  supertest(router)
    .get("/blog")
    .expect(200)
    .expect("Content-Type", /json/)

    .end((err, res) => {
      if (err) return done(err);

      expect(res.text).toBe('["one","two","three"]');
      done();
    });
});

test("/post Blog", (done) => {
  expect.assertions(1);
  const dataToSend = { message: "hello I am gana be Your Test For today" };

  supertest(router)
    .post("/blog")
    .set("password", "potato")
    .send(dataToSend)

    
    .expect(200)
    .expect("content-type", /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toEqual(dataToSend);
      done();
    });
});
