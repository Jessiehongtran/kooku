import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default class Ingredient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openEditCapacity: false,
            openEditUsed: false,
            openEditAvgNeed: false
        }
    }

    openEdit(){
        this.setState({openEditCapacity: !this.state.openEditCapacity})
    }

    render(){
        console.log('props in Ingredient', this.props)
        const each = this.props.ingredient
        const {
            openEditCapacity,
            openEditAvgNeed,
            openEditUsed
        } = this.state

        return (
                <tr>
                        <td>{each.id}</td>
                        <td>{each.ingredient_name}</td>
                        <td>{each.unit}</td>
                        <td>
                            {openEditCapacity 
                            ? <input
                                type="text"
                              />
                            : <div>
                                {each.capacity} 
                                <span onClick={() => this.openEdit()}><FontAwesomeIcon icon={faEdit}/></span>
                              </div>
                            }
                        </td>
                        <td>{each.used} <span><FontAwesomeIcon icon={faEdit}/></span></td>
                        <td>{each.average_need} <span><FontAwesomeIcon icon={faEdit}/></span></td>
                        <td>{each.capacity - each.used}</td>
                        <td>{each.average_need-(each.capacity - each.used)}</td>
                        <td>{each.used}</td>
                </tr>
        )
    }
}