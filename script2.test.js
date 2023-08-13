 import './script2'; // Must be imported before the tested file


describe('./script2', () => {
    it('the data is peanut butter', () => {
        return fetchData().then(data => {
          expect(data).toBe('peanut butter');
        });
      });
});