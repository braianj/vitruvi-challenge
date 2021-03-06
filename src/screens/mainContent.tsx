import React from 'react';
import { RootState } from '../reducers'
import List from '../components/list';
import * as interfaces from '../interfaces';
import Navbar from 'react-bootstrap/Navbar';
import { Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ItemComponent from '../components/itemComponent';
import * as actionTypes from '../constants/actionTypes';

/**
 * 
 * @returns 
 */
const MainContent = () => {
    const dispatch = useDispatch();

    // Load list from reducer
    const listItemsReducer = useSelector((state: RootState) => state.list.data);

    const [showItem, setShowItem] = React.useState(false);
    const [listItems, setListItems] = React.useState(listItemsReducer);
    
    React.useEffect(() => {
        setListItems(listItemsReducer)
    }, [listItemsReducer]);

    const handlerItemComponent = (data: interfaces.listItemDataInterface) => {
        setShowItem(false);
        dispatch({
            type: data.id ? actionTypes.LIST_ACTION_EDIT : actionTypes.LIST_ACTION_ADD,
            payload: data
        });
    };
    const handlerCloseItemComponent = () => {
        setShowItem(false);
    };
    const editHandler = (data: interfaces.listItemDataInterface) => {
        dispatch({
            type: actionTypes.ITEM_ACTION_EDIT,
            payload: data
        });
        setShowItem(true);
    };
    const newHandler = () => {
        dispatch({
            type: actionTypes.ITEM_ACTION_ADD
        });
        setShowItem(true);
    };
    const deleteHandler = (data: interfaces.itemDataReducerInterface) => {
        dispatch({
            type: actionTypes.LIST_ACTION_DELETE,
            payload: data
        });
    };

    return (
        <div className="Page-story-container">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Challenge</Navbar.Brand>
            </Navbar>
            <Jumbotron fluid className='main-container'>
                <h1>Welcome to the challenge!</h1>
                <p>
                    TO DO:
                    * Present visually a list of tasks in 3 different states: Planned, In progress, Completed.<br/>
                    * Each task contains, name, description, estimate and state.<br />
                    * The user needs to be able to add/remove and change the state of the tasks.<br />
                    * Somewhere in the application you need to present an up to date status, adding up all hours for each state.
                </p>

                <Button variant="primary" onClick={() => newHandler()}>
                    Add new
                </Button>
                <List 
                    data={listItems} 
                    fetching={false}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                ></List>
            </Jumbotron>
            <ItemComponent 
                show={showItem} 
                handler={handlerItemComponent} 
                handleClose={handlerCloseItemComponent}
            ></ItemComponent>
        </div>
    );
}

export default MainContent;
