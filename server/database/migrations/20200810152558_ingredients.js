
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name')
        tbl.string('unit')
        tbl.decimal('capacity')
        tbl.decimal('average_need')
        tbl.decimal('used')
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('ingredients')
};

