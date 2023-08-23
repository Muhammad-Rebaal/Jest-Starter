const getPeople = require('./script2');

test('fetch people', async () => {
    const result = await getPeople();
    console.log(result);
    expect(result).toBeDefined();
});
