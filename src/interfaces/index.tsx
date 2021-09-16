
export interface listItemDataInterface {
    name: string,
    description: string,
    estimate: number,
    state: string,
    id: number | null
};

export interface itemDataReducerInterface {
    name: string,
    description: string,
    estimate: number,
    state: string,
    id: number
};

export interface listActionInterface {
    type: string,
    payload: itemDataReducerInterface
};

export interface listDataResponseInterface {
    response: string,
    data: Array<listItemDataInterface>
};

export interface listDataReducerInterface {
    fetching: boolean,
    data: Array<itemDataReducerInterface>,
    activeItem?: listItemDataInterface|null
};

export interface modalInterface {
    show: boolean,
    message: string,
    title: string
}

export interface modalActionInterface {
    type: string,
    payload: modalInterface
}

export interface ItemComponentInterface {
    show: boolean,
    handler: any,
    handleClose: any,
    isUpdateAll?: boolean
}

export type listDataType = listDataReducerInterface & {
    editHandler?: any, 
    deleteHandler?: any
}