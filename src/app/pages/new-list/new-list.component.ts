import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../model/list.model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskservice:TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  createList(title:string){
    this.taskservice.createList(title).subscribe((list:List)=>{
      console.log(list);
      //how to navigate to /list/respons._id
      this.router.navigate(['/lists',list._id]);
    })
  }

}
