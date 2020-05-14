module.exports = {
    applyCreatedUpdated: (obj)=>{
        obj.created_at = { type: 'timestamp', notNull: 'true', defaultValue: new String('now()') };
        obj.updated_at = { type: 'timestamp', notNull: 'true', defaultValue: new String('now()') };

        return obj;
    }
}
