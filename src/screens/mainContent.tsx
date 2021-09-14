import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers'
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import List from '../components/list';

/**
 * 
 * @returns 
 */
const MainContent = () => {

    // Load list from reducer
    const listItems = useSelector((state: RootState) => state.list.data);

    return (
        <div className="Page-story-container">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Challenge</Navbar.Brand>
            </Navbar>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is an example list
                </p>
                <List data={listItems} fetching={false}></List>
            </Jumbotron>
        </div>
    );
}

export default MainContent;
