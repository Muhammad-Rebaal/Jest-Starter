const getPeople = async () => {
    const fetch = await import('node-fetch');

    const getRequest = await fetch.default('https://swapi.dev/api/people');
    const data = await getRequest.json();
    console.log(data);
    return {
        count: data.count,
        result: data.results
    };
};

getPeople().then(result => {
    console.log(result);
});

module.exports=getPeople