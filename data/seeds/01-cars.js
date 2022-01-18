// STRETCH
const cars = [
    {
        vin: '1G4AH51N1K6437778',
        make: 'toyota',
        model: 'prius',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: 'JH4KA7570MC014889',
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