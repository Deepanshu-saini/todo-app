import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from '../model/list.model';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  getLists(uri: string) {
    return this.http.get<List[]>(`${this.ROOT_URL}/${uri}`);
  }
  getTasks(uri: string) {
    return this.http.get<Task[]>(`${this.ROOT_URL}/${uri}`);
  }

  postLists(uri: string, payload: Object) {
    return this.http.post<List>(`${this.ROOT_URL}/${uri}`, payload);
  }

  postTasks(uri: string, payload: Object) {
    return this.http.post<Task>(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}