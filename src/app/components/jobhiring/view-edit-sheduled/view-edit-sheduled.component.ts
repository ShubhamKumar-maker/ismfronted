import { Component, OnInit } from '@angular/core';
import { ImsService } from 'src/app/ims.service';
import { InterviewShedule } from '../../modles/interview-shedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-edit-sheduled',
  templateUrl: './view-edit-sheduled.component.html',
  styleUrls: ['./view-edit-sheduled.component.scss']
})
export class ViewEditSheduledComponent implements OnInit {
  interviewSheduledDetails:Array<InterviewShedule>=[];
  headers = ["PanelID", "CandidateID ","SkillID","Interview Date", "Interview Time", "Action"];
  route: any;

  constructor(private serive:ImsService ) { }

  ngOnInit(): void {
    this.serive.getallsheduledInterview().subscribe(data=>{
      this.interviewSheduledDetails=data;
      this.route.navigate(["/ims/sheduleInterview"]);

    })
  }

}
