import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../model/list.model';
import { Task } from '../model/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:WebRequestService) { }

  createList(title:string){
    //we want to send a web request to create a list.
    return this.webReqService.postLists('lists',{title})
  }

  createTask(title:string, listId:string){
    //we want to send a web request to create a task.
    return this.webReqService.postTasks(`lists/${listId}/tasks`,{title})
  }

  complete(task:Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed:true
    })
  }
  getLists(): Observable<List[]>{
    return this.webReqService.getLists('lists');
  }

  getTasks(listId:string): Observable<Task[]>{
    return this.webReqService.getTasks(`lists/${listId}/tasks`);
  }

  deleteTask(task:Task){
    return this.webReqService.delete(`lists/${task._listId}/tasks/${task._id}`);
  }
}