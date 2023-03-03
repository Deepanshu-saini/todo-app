import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/model/list.model';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks!:Task[];
  lists!:List[];
  listId!:string;

  constructor(private taskservice:TaskService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params:Params)=>{
        this.listId=params['listId'];
        this.taskservice.getTasks(params['listId']).subscribe((tasks:Task[])=>{
          this.tasks=tasks;
        })
      }
    )
    this.taskservice.getLists().subscribe((lists:List[])=>{
      this.lists=lists
    })
    // this.taskservice.getTasks().subscribe((tasks:any)=>{
    //   this.tasks=tasks;
    // })
  }

  onTaskClick(task:Task){
    //we want to set task to completed
    this.taskservice.complete(task).subscribe(()=>{
      console.log("completed successfully!");
      task.completed=!task.completed;
    });

  }

  getTasks(id:string){
    console.log(id);
    this.taskservice.getTasks(id).subscribe((task:Task[])=>{
      this.tasks=task;
    })
  }

  deleteTask(task:Task){
    //we want to Delete task.
    this.taskservice.deleteTask(task).subscribe((res:any)=>{
      console.log(res);
      this.getTasks(this.listId);
    });

  }
}
