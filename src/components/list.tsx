import React from 'react';
import Table from 'react-bootstrap/Table';
import * as interfaces from "../interfaces";

/**
 * @param interfaces.listItemDataInterface
 * @returns 
 */
const List = ({ data, fetching }: interfaces.listDataReducerInterface) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Estimate</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(e =>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.description}</td>
                            <td>{e.estimate}</td>
                            <td>{e.state}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}

export default List;
