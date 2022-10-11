const { dataUsa, dataUsaById } = require('./dataService');

jest.mock('./dataService');

describe('dataService test', () => {
test('As a user I should return 10 data', async () => {
                const result = await dataUsa();
                expect(result.data.name).toEqual('Buzz');
                expect(result.data.tagline).toEqual('A Real Bitter Experience.');
                expect(result.data.first_brewed).toEqual('09/2007');
                expect(result.data.description).toEqual('A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.');
                expect(result.data.abv).toEqual(4.5);
                expect(result.data.ibu).toEqual(60);
                expect(result.data.target_fg).toEqual(1010);
                expect(result.data.target_og).toEqual(1044);
                expect(result.data.ebc).toEqual(20);
                expect(result.data.srm).toEqual(10);
                expect(result.data.ph).toEqual(4.4);
                expect(result.data.attenuation_level).toEqual(75);
    
});

    test('As a user I should return a data object by Id', async () => {
        const result = await dataUsaById(1);
        console.log('result', result.data);
        
});
});