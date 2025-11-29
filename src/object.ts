//Object type data here......
var useData: {
    name: string,
    age: number,
    country: string
} = {
    name: 'Mottakinul Alam',
    age: 30,
    country: 'Bangladesh'
}

//here is the another one
var userData: {
    [key: string]: string | undefined | number
} = {
    name: 'Imrul Kobiraj',
    age: 60,
    country: 'Bangladesh',
}

//nested object example 
var user: {
    name: string,
    age: number,
    country: string,
    address: {
        [key: string]: string
    }
} = {
    name: 'Mottakinul Alam',
    age: 30,
    country: 'Bangladesh',
    address: {
        houseNo: '8/16',
        roadNo: 'Salimullah 8',
        stateName: 'Mohammadpur',
    }
}