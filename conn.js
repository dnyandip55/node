const {MongoClient}=require('mongodb');
// const MongoClient=require('mongodb').MongoClient;

const url= 'mongodb://127.0.0.1:27017';
const database='Cricket';
const client=new MongoClient(url);

 async function getData(){
    let result= await client.connect();
    let db=result.db(database);
    let collection=db.collection('IPL');
    let response=await collection.find({}).toArray()
    console.log(response);
}

getData();
