import * as actionTypes from '../constants/actionTypes';
import { listDataReducerInterface, listActionInterface } from '../interfaces'

const initialState: listDataReducerInterface = {
    fetching: false,
    data: [
        {
            name: "Name 1",
            description: "Description 1",
            estimate: "Estimate 1",
            state: "Planned",
            id: 1
        },
        {
            name: "Name 2",
            description: "Description 2",
            estimate: "Estimate 2",
            state: "In progress",
            id: 2
        },
        {
            name: "Name 3",
            description: "Description 3",
            estimate: "Estimate 3",
            state: "Completed",
            id: 3
        },
        {
            name: "Name 4",
            description: "Description 4",
            estimate: "Estimate 4",
            state: "Planned",
            id: 4
        },
        {
            name: "Name 5",
            description: "Description 5",
            estimate: "Estimate 5",
            state: "In progress",
            id: 5
        },
        {
            name: "Name 6",
            description: "Description 6",
            estimate: "Estimate 6",
            state: "Completed",
            id: 6
        }
    ]
};


export const list = (state = initialState, action: listActionInterface): listDataReducerInterface => {
    switch (action.type) {
        case actionTypes.LIST_ACTION_ADD:
            const newList = [...state.data, action.payload]
            return {
                ...state,
                data: newList
            };

        case actionTypes.LIST_ACTION_EDIT:
            state.data.map(e => e.id === action.payload.id ? action.payload : e);
            return {
                ...state
            };

        case actionTypes.LIST_ACTION_DELETE:
            const deletedResult = state.data.filter(e => e.id !== action.payload.id)
            return {
                ...state,
                data: deletedResult
            };

        default:
            return state;
    }
};
