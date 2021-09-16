
import * as interfaces from "../interfaces";


/**
 * Action to do with the list
 * Here is the place where fetch to api should should go
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