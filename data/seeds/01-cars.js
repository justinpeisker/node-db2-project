// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}