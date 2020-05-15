import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

formJS : FormGroup;

  onSubmit()
  {
    console.log("My form",this.formJS.get('ProjectName').value);
    console.log("My form",this.formJS.get('ProjectMail').value);
    console.log("My form",this.formJS.get('ProjectStatus').value);
  }

  ngOnInit()
  {
    this.formJS = new FormGroup(
      {
        'ProjectName' : new FormControl(null, [Validators.required,this.forbiddenProjectNames], this.forbiddenProjectNamesOnServer)
        ,'ProjectMail' : new FormControl('',[Validators.required,Validators.email]),
        'ProjectStatus' : new FormControl(null,Validators.required)
      }
    );
  }
  forbiddenProjectNames(control : FormControl): {[s: string]: boolean}
  {
    if(control.value === 'Test')
      return {isNameForbidden: true};
    else
      return null;
  }
  forbiddenProjectNamesOnServer(control : FormControl): Promise<any> | Observer<any>
  {
    var promise = new Promise<any>(
      (resolve, reject) =>
      {
        setTimeout(() =>
        {
         if(control.value === 'Test2')
          resolve({isNameForbidden: true});
         else
          resolve(null);
        },2000)
      }
    )
    return promise;
 }
}