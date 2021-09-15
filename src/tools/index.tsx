import React from 'react';

const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
}

export {isEmpty}