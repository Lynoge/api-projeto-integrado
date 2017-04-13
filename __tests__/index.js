// Teste Síncrono
describe('Models: Index', () => {
  it('First test', () => {
    expect(200).toBe(200)
  })
})


// Teste Assíncronos
// Com callback
var fetchData = function (callback) {
  setTimeout(function () {
    callback(87);
  }, 1000);
};

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe(87);
    done();
  }

  fetchData(callback);
});


// Teste Assíncrono
// Com promise
var p = (new Promise(function (resolve, reject) {
  console.log("Promiss started!");
  setTimeout(function () {
    resolve(87);
  }, 3000);
}));


test('the data is peanut butter', () => {
  return p.then(result => {
    expect(result).toBe(87);
  });
});