

export class DataProviderAll{

    async getAll (){
        const response = await fetch ('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    }
}