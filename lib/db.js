var mysql = require('mysql');
var allConfigs = require('../config/db.json');
let env = process.env.NODE_ENV || 'dev';
let config = allConfigs[env];

let getVar = (key)=>{
    let value = config[key];

    if(!value) return null;

    if(value.ENV){
        return process.env[value.ENV];
    } else {
        return value;
    }
}

let connectionInfo = {
    connectionLimit : 10,
    host            : process.env.DB_HOST || getVar('host'),
    user            : process.env.DB_USER || getVar('user'),
    password        : process.env.DB_PASSWORD || getVar('password'),
    database        : getVar('database')
}

module.exports = function(){
    var pool = mysql.createPool(connectionInfo);

    return {
        pool,
        query: (q, placeholders=[])=>{
            return new Promise((resolve, reject)=>{
                pool.getConnection(function(err, connection){
                    if(err) return reject(err);

                    connection.query(q, placeholders, function(err, results, fields){
                        connection.release();

                        if(err) reject(err);

                        resolve(results, fields);
                    });
                })
            })
        },
        getById: (table, id)=>{
            return new Promise((resolve, reject)=>{
                pool.getConnection((err, connection)=>{
                    if(err) return reject(err);

                    connection.query('select * from '+table+' where id = ?', [id], (err, results, fields)=>{
                        connection.release();

                        if(err) reject(err);

                        resolve(results.length ? results[0] : null, fields);
                    });
                });
            });
        }
    }
}
