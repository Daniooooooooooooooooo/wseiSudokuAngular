export class Sudoku {
    private internalSudokuTable: number[][];

    getRow(rowId: number) {
        return this.internalSudokuTable[rowId];
    }

    getColumn(columnId: number) {
        let column: number[];
        this.internalSudokuTable.forEach(element => {
            column.push(element[columnId]);
        });
        return column;
    }

    getBlock(x: number, y: number) {
        let result: number[];
        for (let startX =  x * 3; startX < startX + 3; startX++) {
            for (let startY = y * 3; startY < startY + 3; startY++) {
                result.push(this.internalSudokuTable[startX][startY]);
            }
        }
        return result;
    }
}
