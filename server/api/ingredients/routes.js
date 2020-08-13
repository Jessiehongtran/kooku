const router = require('express').Router();
const Ingredients = require('./queries')


//GET
router.get('/', async (req,res) => {
    try {
        const ingredients = await Ingredients.get()
        res.status(200).json(ingredients)
    } catch (err){
        res.status(500).json(err)
    }
})

//POST
router.post('/', async (req,res) => {
    const new_ingredient = req.body
    console.log('new_ingredient', new_ingredient)
    try {
        const ingredient_id = await Ingredients.create(new_ingredient)
        res.status(200).json(ingredient_id)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const change = req.body
    try {
        await Ingredients.update(id, change)
        res.status(200).json({message: 'Updated 1 ingredient successfully'})
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
router.delete('/:id', async (req,res) => {
    const id = req.params.id
    try {
        await Ingredients.delete(id)
        res.status(200).json({message: 'Deleted 1 ingredient successfully'})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;