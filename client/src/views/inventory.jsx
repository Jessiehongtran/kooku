import React from 'react';
import { ingredients } from '../data/ingredients';
import '../styles/inventory.scss'

export default class Inventory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: ingredients,
            new_ingredient: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.addIngredient = this.addIngredient.bind(this)

    }

    handleChange = (e) => {
        this.setState({new_ingredient: e.target.value})
    }

    addIngredient = (e) => {
        e.preventDefault()
        const new_ingre = {
            id: this.state.ingredients.length + 1,
            ingredient_name: this.state.new_ingredient,
            unit: "",
            capacity: 0,
            average_need: 0,
            used: 0,
        }
        this.setState({
            ingredients: [...this.state.ingredients, new_ingre]
        })
    }



    render(){
        const {ingredients} = this.state

        return (
        <div className="inventory">
            <label>Add new ingredient</label>
            <input 
                type="text"
                onChange={this.handleChange}
            />
            <button onClick={this.addIngredient}>Add</button>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Ingredients</th>
                    <th>Unit</th>
                    <th>Capacity</th>
                    <th>Inventory</th>
                    <th>Average Need</th>
                    <th>To Fill (min)</th>
                    <th>To Fill (max)</th>
                </tr>
                {ingredients.map(each => 
                    <tr>
                        <td>{each.id}</td>
                        <td>{each.ingredient_name}</td>
                        <td>{each.unit}</td>
                        <td>{each.capacity}</td>
                        <td>{each.capacity - each.used}</td>
                        <td>{each.average_need}</td>
                        <td>{each.average_need-(each.capacity - each.used)}</td>
                        <td>{each.used}</td>
                    </tr>
                )}
            </table>
        </div>
        )
    }
}