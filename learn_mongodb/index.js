const MongoClinent = require('mongodb').MongoClient

const URL = 'mongodb+srv://learn_main:9*M$b156Qgs5@cluster0.cr7yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



MongoClinent.connect(URL, (err, res) => {

    if (err) { console.log('Not connect') }
    else {
        insert(res)
        console.log('connected')
    }
})
function insert(res) {
    var database = res.db('school')
    var db_collection = database.collection('studemts')
    var Data = {
        name: 'sff',
        roll: 14
    }
    db_collection.insertOne(Data, (err) => {
        if (err) { console.log('not insert') }
        else {
console.log('inerted')

        }
    })
}
