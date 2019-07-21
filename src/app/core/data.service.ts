import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getSudokus(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'sudokus.json')
        .pipe(
            catchError(this.handleError)
        );
  }

  getSudoku(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'sudokus.json')
        .pipe(
          map(sudokus => {
            let sudoku = sudokus.filter((sud: any) => sud.id === id);
            return (sudoku && sudoku.length) ? sudoku[0] : null;
          }),
          catchError(this.handleError)
        );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
