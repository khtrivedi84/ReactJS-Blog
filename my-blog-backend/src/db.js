import {MongoClient} from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.t2mlpv6.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();

    db = client.db('react-blog-db');
    cb();
}

export {db, connectToDb,}


[{
    name: 'learn-react',
    upvotes: 0,
    comments:[],
}, {
    name: 'learn-node',
    upvotes: 0,
    comments:[],
}, {
    name: 'mongodb',
    upvotes: 0,
    comments:[],
}]