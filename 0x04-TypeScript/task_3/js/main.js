"use strict";
exports.__esModule = true;
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// insert the row and save generated  RowID
var newRowID = CRUD.insertRow(row);
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
// call
CRUD.updateRow(newRowID, updatedRow);
// call
CRUD.deleteRow(newRowID);
