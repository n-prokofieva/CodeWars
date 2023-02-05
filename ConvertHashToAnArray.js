function convertHashToArray(hash){
    return Object.entries(hash).sort();
}

convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'});