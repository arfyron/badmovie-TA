//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb')



module.exports = {
    
}


// module.exports = {
//     movies: {
//        get: (cb) => {
//            sqlDb.query('select * from movies', (err, result) => {
//                cb(err, result)
//            })
//        },
//        save: (movie, cb) => {
//         // sqlDb.query('SELECT id from movies where id = ?', movie.id, (err, results) => {
//         //     if ()
//         // }) 
//            let queryStr = 'INSERT IGNORE into movies (title, release_date, id, vote_average, poster_path) value (?,?,?,?,?)';
//             let params = [
//                 movie.title,
//                 movie.release_date.substring(0,4),
//                 movie.id,
//                 movie.vote_average,
//                 movie.poster_path
//            ]
           
//             sqlDb.query(queryStr, params, (err, results) => {
//                 cb(err, results)
//             })
//        },
//        delete: (movie, cb) => {
//            let queryStr = 'delete from movies where id = ?'
//            let params = movie.id
//            sqlDb.query(queryStr, params, (err, results) => {
//                cb(err, results)
//            })
//        }
//     }
// }