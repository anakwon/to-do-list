import React from 'react';
import listData from '../helpers/list_data';

export default props => {


    console.log('List Goes Here :', listData);

    const listElements = listData.map((item, index) => {
        return <li key={index} className="collection-item">{item.title}</li>
    });
    //map takes callback function. It will run the function 

    return (
        <div>
            <h3>List will be here</h3>
            <ul className="collection">
                { listElements }
            </ul>
        </div>
    )
}

// export default (props) => {
//     return // something
// }

// export default function(props) {
//     return // something
// }

//all three methods doing the samething. 