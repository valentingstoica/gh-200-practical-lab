function createGreeting(name) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(createGreeting("GitHub Actions"));
}

module.exports = { createGreeting };
