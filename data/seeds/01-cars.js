// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '1111111111111112',
        make: 'dodge',
        model: 'ram',
        mileage: 10000,
        title: 'clean',
        transmission: 'automatic',
    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}