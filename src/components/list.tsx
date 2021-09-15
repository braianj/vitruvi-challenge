import React from 'react';
import { Table, Button } from 'react-bootstrap';
import * as interfaces from "../interfaces";

/**
 * @param interfaces.listItemDataInterface
 * @returns 
 */
const List = ({ data, fetching, editHandler, deleteHandler }: interfaces.listDataType) => {
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Estimate</th>
                    <th>State</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(e =>
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.description}</td>
                            <td>{e.estimate}</td>
                            <td>{e.state}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => editHandler(e)}>Edite</Button>{' '}
                                <Button variant="outline-danger" onClick={() => deleteHandler(e)}>Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}

export default List;
