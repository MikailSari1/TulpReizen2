import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import {ApiResponse, IDestination, IGuide} from '@TulpReizen2/shared/api';
import { Injectable } from '@angular/core';
import { environment } from "@TulpReizen2/shared/util-env";
import {httpOptions} from "../guides/guide.service";

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */

/**
 *
 *
 */
@Injectable()
export class DestinationService {
  endpoint = environment.dataApiUrl + '/destination';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all items.
   *
   * @options options - optional URL queryparam options
   */
  public list(options?: any): Observable<IDestination[] | null> {
    console.log(`list ${this.endpoint}`);

    return this.http
      .get<ApiResponse<IDestination[]>>(this.endpoint, {
        ...options,
      })
      .pipe(
        map((response: any) => response.results as IDestination[]),
        tap(console.log),
        catchError(this.handleError)
      );
  }

  /**
   * Get a single item from the service.
   *
   */
  public read(id: string | null, options?: any): Observable<IDestination> {
    console.log(`read ${this.endpoint}`);
    return this.http
      .get<ApiResponse<IDestination>>(`${this.endpoint}/${id}`, {
        ...options,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IDestination),
        catchError(this.handleError)
      );
  }

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in GuideService', error);

    return throwError(() => new Error(error.message));
  }

  public delete(id: string | null, options?: any): Observable<void> {
    console.log(`delete ${this.endpoint}`);
    return this.http
      .delete<void>(`${this.endpoint}/${id}`, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(() => console.log(`Deleted item with id: ${id}`)),
        catchError(this.handleError)
      );
  }

  public update(data: any, options?: any): Observable<IDestination> {
    console.log(`update ${this.endpoint}/${data?.id}`);

    return this.http
      .put<ApiResponse<IDestination>>(`${this.endpoint}/${data?.id}`, data, {
        ...options,
        /*
                ...httpOptions,
         */
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IDestination),
        catchError(this.handleError)
      );
  }

  public create(data: IDestination | null, options?: any): Observable<IDestination> {
    console.log(`create ${this.endpoint}`);

    return this.http
      .post<ApiResponse<IDestination>>(this.endpoint, data, {
        ...options,
        /*
                ...httpOptions,
         */
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IGuide),
        catchError(this.handleError)
      );
  }
}
