const db = require('../../database/dbConfig');

module.exports = {
    get: () => {
        return db("ingredients")
    },
    getById: (id) => {
        return db("ingredients")
                .where({id: id})
    },
    create: (ingredient) => {
        return db("ingredients")
                .returning("id")
                .insert(ingredient)
                .then(ids => ({id: ids[0]}))
    },
    update: (id, change) => {
        return db("ingredients")
                .where({id: id})
                .update(change)
    },
    delete: (id) => {
        return db("ingredients")
                .where({id: id})
                .del()
    }
}
