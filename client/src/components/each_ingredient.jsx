import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default class Ingredient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openEditCapacity: false,
            openEditUsed: false,
            openEditAvgNeed: false,
            capacity: this.props.ingredient.capacity,
            used: this.props.ingredient.used,
            avgNeed: this.props.ingredient.average_need
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

    updateChange(){
        //change in backend
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
            avgneed
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
                                step="0.00"
                                value={capacity}
                                onChange={this.handleChange}
                                />
                                <button onClick={() => this.doneEdit("capacity")}>Ok</button>
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
                                step="0.00"
                                value={used}
                                onChange={this.handleChange}
                                />
                                <button onClick={() => this.doneEdit("used")}>Ok</button>
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
                                step="0.00"
                                value={avgneed}
                                name="avgneed"
                                onChange={this.handleChange}
                                />
                                <button onClick={() => this.doneEdit("avg_need")}>Ok</button>
                              </div>
                            : <div>
                                {avgneed} 
                                <span onClick={() => this.toggleEdit("avg_need")}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            }
                        </td>
                        <td>{each.capacity - each.used}</td>
                        <td>{each.average_need-(each.capacity - each.used)}</td>
                        <td>{each.used}</td>
                </tr>
        )
    }
}