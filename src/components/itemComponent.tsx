import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { ItemComponentInterface } from "../interfaces";
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { useInput } from '../hooks/inputHook';

const ItemComponent = ({ show, handler, handleClose }: ItemComponentInterface) => {

    // Load list from reducer
    const activeItem = useSelector((state: RootState) => state.list.activeItem);
    
    const { value: name, bind: bindName, setValue: setValueName } = useInput('');
    const { value: description, bind: bindDescription, setValue: setValueDescription } = useInput('');
    const { value: estimate, bind: bindEstimate, setValue: setValueEstimate } = useInput('');
    const { value: state, bind: bindState, setValue: setValueState } = useInput('');

    // this effect will set the values that cames from the reducer
    React.useEffect(() => {
        if (activeItem) {
            setValueName(activeItem.name);
            setValueDescription(activeItem.description);
            setValueEstimate(activeItem.estimate);
            setValueState(activeItem.state);
        } else {
            setValueName('');
            setValueDescription('');
            setValueEstimate('');
            setValueState('Planned');
        }
    }, [activeItem]);

    // action to submit values
    const submitData = () => {
        const data = {
            name,
            description,
            estimate,
            state,
            id: activeItem && activeItem.id ? activeItem.id : null
        }
        handler(data);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{activeItem && activeItem.id ? 'Edit item' : 'Add new item'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        {...bindName}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        {...bindDescription}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Estimate</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        {...bindEstimate}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">State</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="select"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        {...bindState}
                    >
                        <option>Planned</option>
                        <option>In progress</option>
                        <option>Completed</option>
                    </FormControl>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitData}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ItemComponent;