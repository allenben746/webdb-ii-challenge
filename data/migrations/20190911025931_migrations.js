
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
  //Create VIN (id)

  //Create make

  //Create model

  //Create mileage

  //Transmission type

  //Title Status

    })
};

exports.down = function(knex) {
  
};
