'use strict';

var dbm;
var type;
var seed;
var helper = require('../lib/migrate_helper')

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, callback) {
    db.createTable('users', helper.applyCreatedUpdated({
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        name: 'string',
        email: 'string',
        password: 'string'
    }), ()=>{
        db.insert(
            'users',
            ['name', 'email',  'password', 'confirmed'],
            ['Steve', 'test@dev', 'dev', true],
            callback
        )
    });
};

exports.down = function(db, callback) {
    db.dropTable('users', callback);
};

exports._meta = {
    'version': 1
};
