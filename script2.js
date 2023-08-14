const getPeople = async () => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    console.log(data);
    return {
        count: data.count,
        result: data.results
    };
};

module.exports = getPeople;
