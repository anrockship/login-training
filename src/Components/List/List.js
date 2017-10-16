import React, { Component } from 'react';
import { render } from 'react-dom';
import './List.css';

const data = [
  {id: '1', name: 'An', age: '20'},
  {id: '2', name: 'Thai', age: '22' },
  {id: '3', name: 'Duy', age: '21'},
]

class List extends Component {
  render() {
    return (
        <div>
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                {data.map(item => <tbody key={item.id}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    )
  }
}

export default List;