function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error('Prueba NO exitosa');
      }
    }
  }
}

function it(title, callback) {
  try {
    callback();
    console.log(`✔️ - ${title}`);
  } catch {
    console.error(`✖️ - ${title}`);
  }
}

module.exports = {
  expect,
  it
}