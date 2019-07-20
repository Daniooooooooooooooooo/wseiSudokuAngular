export class Sudoku {
    sudokuTable: number[][] = new Array();

    initValues(sudokuString: string) {
        if (sudokuString.length === 81) {
            for (let index = 0; index < 9; index++) {
                let subString = sudokuString.substr(index * 9, 9);
                let row: number[] = new Array(9);
                for (let index2 = 0; index2 < 9; index2++) {
                    row[index2] = +subString[index2];
                }
                this.sudokuTable.push(row);
            }
        }
    }

    getRow(rowId: number): number[] {
        return this.sudokuTable[rowId];
    }

    getColumn(columnId: number): number[] {
        let column: number[] = new Array();
        this.sudokuTable.forEach(element => {
            column.push(element[columnId]);
        });
        return column;
    }

    getBlock(x: number, y: number): number[] {
        let result: number[] = new Array();
        for (let startX =  x * 3; startX < x * 3 + 3; startX++) {
            for (let startY = y * 3; startY < y * 3 + 3; startY++) {
                result.push(this.sudokuTable[startX][startY]);
            }
        }
        return result;
    }
}
