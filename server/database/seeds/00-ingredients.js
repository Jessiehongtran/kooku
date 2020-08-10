
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          ingredient_name: "Broccoli",
          unit: "gr",
          capacity: 100,
          average_need: 80,
          used: 30,
        },
        {
          id: 2,
          ingredient_name: "Orange",
          unit: "item",
          capacity: 10,
          average_need: 5,
          used: 3,
        }
      ]);
    });
};
