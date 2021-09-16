import React from 'react';
import { Table, Button } from 'react-bootstrap';
import * as interfaces from "../interfaces";

/**
 * @param interfaces.listItemDataInterface
 * @returns 
 */
const List = ({ data, fetching, editHandler, deleteHandler }: interfaces.listDataType) => {
    let plannedSum = 0;
    let inProgressSum = 0;
    let completedSum = 0;
    // make a simple sumatory of the differents states
    data.map(e => {
        if (e.state === "Planned") {
            plannedSum += e.estimate;
        } else if (e.state === "In progress") {
            inProgressSum += e.estimate;
        } else if (e.state === "Completed") {
            completedSum += e.estimate;
        }
    });
    
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
                                <Button variant="outline-primary" onClick={() => editHandler(e)}>Change State</Button>{' '}
                                <Button variant="outline-danger" onClick={() => deleteHandler(e)}>Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={6}>State Totals</td>
                </tr>
                <tr>
                    <td colSpan={6}>Planed: {plannedSum}</td>
                </tr>
                <tr>
                    <td colSpan={6}>In Progress: {inProgressSum}</td>
                </tr>
                <tr>
                    <td colSpan={6}>Completed: {completedSum}</td>
                </tr>
            </tfoot>
        </Table>
    );
}

export default List;
