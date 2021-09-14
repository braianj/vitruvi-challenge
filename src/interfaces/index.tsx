
export interface listItemDataInterface {
    name: string,
    description:string,
    estimate: string,
    state: string,
    id?: number
};

export interface listActionInterface {
    type: string,
    payload: listItemDataInterface

};

export interface listDataResponseInterface {
    response: string,
    data: Array<listItemDataInterface>
};

export interface listDataReducerInterface {
    fetching: boolean,
    data: Array<listItemDataInterface>
};

export interface modalInterface {
    show: boolean,
    message: string,
    title: string
}

export type modalActionInterface = {
    type: string,
    payload: modalInterface
}