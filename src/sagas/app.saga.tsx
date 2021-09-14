import { call, put, select } from "@redux-saga/core/effects";
import * as actionTypes from "../constants/actionTypes"
import * as actions from "../actions"
import * as interfaces from "../interfaces";

/**
 * Action to do in a list
 * @param action 
 */
export function* doListAction(action: interfaces.listActionInterface): Generator<any> {
    try {

        // Get list
        const listData = (yield select(state => state.list.data)) as interfaces.listItemDataInterface;

        // call action
        const actionResult = (yield call(actions.doListAction, action)) as interfaces.listActionInterface;

    } catch (e: any) {
        yield put({
            type: actionTypes.MODAL_SHOW,
            payload: {
                title: "error",
                message: e.message
            }
        });
    }
}