
export function searchFilter(restaurants, input){
    return restaurants.filter(res => res.info.name.toLowerCase().includes(input.toLocaleLowerCase()));
}