const yargs = require('yargs');
const axios = require('axios').default;
const fs = require('fs');

let argv = yargs.argv
let postman_key = argv.postman_key;
let collection_uid = argv.collection_uid;

console.log(postman_key)
console.log(collection_uid)


if(postman_key){
	let url = `https://api.getpostman.com/collections/${collection_uid}`
    
axios.get(url,{
    headers: {
    	'X-API-Key': ''
  	}
})
.then((response) => {
	console.log(response.data);
    //get the response data and write to file.
    let responseString = JSON.stringify(response.data)
        console.log(responseString);

    // create and populate the collection.json file
    fs.writeFile('collection.json', responseString, (err) => {
        if (err) throw err;
        console.log('The file was updated!');
    });

    //run newman from the command line. 


})
.catch(err => {
    console.log(err);
})
}
else{
    console.log('Please enter a Postman API Key')
}
