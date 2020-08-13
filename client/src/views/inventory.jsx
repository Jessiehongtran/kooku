import React from 'react';
import { ingredients } from '../data/ingredients';
import Axios from 'axios';
import '../styles/inventory.scss';
import Ingredient from '../components/each_ingredient'
import { API_URL } from '../config';

export default class Inventory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [],
            new_ingredient: "",
            unit: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.addIngredient = this.addIngredient.bind(this)

    }

    getIngredients(){
        Axios.get(`${API_URL}/api/ingredients`)
            .then(res => {
                this.setState({ingredients: res.data})
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    componentDidMount(){
       this.getIngredients()
    }

    handleChange = (e) => {
        this.setState({...this.state,[e.target.name]: e.target.value})
    }

    addIngredient = (e) => {
        e.preventDefault()
        const new_ingre = {
            ingredient_name: this.state.new_ingredient,
            unit: this.state.unit,
            capacity: 0,
            average_need: 0,
            used: 0,
        }
        Axios.post(`${API_URL}/api/ingredients`, new_ingre)
            .then(res => {
                this.getIngredients()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    render(){
        const {ingredients} = this.state

        return (
        <div className="inventory">
            <div className="add_new">
                <label>Add new ingredient</label>
                <input 
                    type="text"
                    name="new_ingredient"
                    placeholder="Ex.orange"
                    onChange={this.handleChange}
                />
                <label>Unit</label>
                <input 
                    type="text"
                    name="unit"
                    placeholder="Ex.item"
                    onChange={this.handleChange}
                />
                <button onClick={this.addIngredient}>Add</button>
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Ingredients</th>
                    <th>Unit</th>
                    <th>Capacity</th>
                    <th>Used</th>
                    <th>Average Need</th>
                    <th>Inventory</th>
                    <th>To Fill (min)</th>
                    <th>To Fill (max)</th>
                </tr>
                {ingredients.map(each => 
                    <Ingredient ingredient= {each}/>
                    
                )}
            </table>
            <div className="print_container">
                <button className="print" onClick={() => window.print()}>Print Report</button>
            </div>
        </div>
        )
    }
}