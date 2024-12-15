import { RowID, RowElement } from './interface';


import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// insert the row and save generated  RowID
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};

// call
CRUD.updateRow(newRowID, updatedRow);

// call
CRUD.deleteRow(newRowID);