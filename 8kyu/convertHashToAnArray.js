function convertHashToArray(hash){
    return Object.entries(hash).sort();
}

convertHashToArray({name: 'Nataliia', age: 24, role: 'Software Engineer'});