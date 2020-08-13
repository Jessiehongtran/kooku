import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from '../config';
import '../styles/each_ingredient.scss'
import Axios from 'axios';

export default class Ingredient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openEditCapacity: false,
            openEditUsed: false,
            openEditAvgNeed: false,
            capacity: this.props.ingredient.capacity,
            used: this.props.ingredient.used,
            average_need: this.props.ingredient.average_need
        }

        this.handleChange = this.handleChange.bind(this)
    }

    toggleEdit(toToggle){
        if (toToggle === "capacity"){
            this.setState({openEditCapacity: !this.state.openEditCapacity})
        }
        else if (toToggle === "used"){
            this.setState({openEditUsed: !this.state.openEditUsed})
        }
        else if (toToggle === "avg_need"){
            this.setState({openEditAvgNeed: !this.state.openEditAvgNeed})
        }
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    updateChange(name, change){
        //change in backend
        Axios.patch(`${API_URL}/api/ingredients/${this.props.ingredient.id}`, change)
             .then(res => {
             })
             .catch(err => {
                 console.log(err.response)
             })
    }

    doneEdit(toClose){
        this.toggleEdit(toClose)
        this.updateChange()
    }

    render(){
        console.log('props in Ingredient', this.props)
        console.log(this.state.capacity)
        const each = this.props.ingredient
        const {
            openEditCapacity,
            openEditAvgNeed,
            openEditUsed,
            capacity,
            used,
            average_need
        } = this.state

        return (
                <tr>
                        <td>{each.id}</td>
                        <td>{each.ingredient_name}</td>
                        <td>{each.unit}</td>
                        <td>
                            {openEditCapacity 
                            ? <div>
                                <input
                                type="number"
                                name="capacity"
                                step="0.01"
                                value={capacity}
                                onChange={this.handleChange}
                                />
                                <span onClick={() => this.doneEdit("capacity")}><FontAwesomeIcon icon={faCheck}/></span>
                              </div>
                            : <div>
                                {capacity} 
                                <span onClick={() => this.toggleEdit("capacity")}><FontAwesomeIcon icon={faEdit}/></span>
                              </div>
                            }
                        </td>
                        <td>
                            {openEditUsed 
                            ? <div>
                                <input
                                type="number"
                                name="used"
                                step="0.01"
                                value={used}
                                onChange={this.handleChange}
                                />
                                <span onClick={() => this.doneEdit("used")}><FontAwesomeIcon icon={faCheck}/></span>
                              </div>
                            : <div>
                                {used} 
                                <span onClick={() => this.toggleEdit("used")}><FontAwesomeIcon icon={faEdit}/></span>
                              </div>
                            }
                        </td>
                        <td>
                            {openEditAvgNeed
                            ? <div>
                                <input
                                type="number"
                                step="0.01"
                                value={average_need}
                                name="average_need"
                                onChange={this.handleChange}
                                />
                                <span onClick={() => this.doneEdit("avg_need")}><FontAwesomeIcon icon={faCheck}/></span>
                              </div>
                            : <div>
                                {average_need } 
                                <span onClick={() => this.toggleEdit("avg_need")}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            }
                        </td>
                        <td>{capacity - used > 0 ? Math.round((capacity - used)*100)/100 : "0"}</td>
                        <td>{average_need-(capacity - used) > 0 ? Math.round((average_need-(capacity - used))*100)/100 : "0"}</td>
                        <td>{Math.round(used*100)/100}</td>
                </tr>
        )
    }
}