import { RowID } from "./interface";
import { RowElement } from "./interface";

export function createRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;