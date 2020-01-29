const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '123456',
        database : 'church'
    }
});



const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { 
    db.select('*').from('members')
        .then(member => {
            res.json(member)
        });
});

app.listen(3000, () => {
    console.log('app is running on port 3000');
})