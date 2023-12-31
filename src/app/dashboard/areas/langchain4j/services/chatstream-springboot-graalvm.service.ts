import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatstreamSpringbootGraalvmService {

  private eventSource: EventSource;

  constructor(private http: HttpClient) {}

  connectToChatStream(): Observable<string> {
    return new Observable<string>((observer) => {
      this.eventSource = new EventSource('http://localhost:8080/messages');

      this.eventSource.addEventListener('message', (event: MessageEvent) => {
        observer.next(event.data);
      });

      this.eventSource.addEventListener('error', (error) => {
        observer.error(error);
      });

      return () => {
        this.eventSource.close();
      };
    });
  }

  getBuildType(): Observable<string> {
    const url = 'http://localhost:8080/messages/build-type';
    return this.http.get(url, { responseType: 'text'}).pipe(
      catchError((error) => {
        console.error('Error sending message:', error);
        return throwError(error);
      })
    );
  }
   sendMessage(message: string): Observable<any> {
    const url = 'http://localhost:8080/messages';
    const body = {message};
    const jsonBody = JSON.stringify(body);
    console.log(jsonBody);

    // Set headers for JSON content
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, jsonBody, { headers}).pipe(
      catchError((error) => {
        console.error('Error sending message:', error);
        return throwError(error);
      })
    );
  }
}
