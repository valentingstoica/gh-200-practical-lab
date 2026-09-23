const test = require("node:test");
const assert = require("node:assert/strict");
const { createGreeting } = require("./index");

test("creates a greeting for the provided name", () => {
  assert.equal(createGreeting("Vali"), "Hello, Vali! ");
});
