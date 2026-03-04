export class DataProviderByName{
    async getByName(name){
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const data = await response.json();
        return data.results;
    }
}