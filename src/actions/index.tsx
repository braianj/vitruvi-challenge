
import * as interfaces from "../interfaces";


/**
 * Action to do with the list
 * @param payload 
 * @returns 
 */
const doListAction = async (payload: interfaces.listActionInterface): Promise<interfaces.listActionInterface> => {
    try{
        console.log(payload)
        return payload;
        
    } catch (err: any) {
        return payload;
    }

}

export { 
    doListAction
};