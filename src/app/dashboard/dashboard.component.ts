import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { empoylee } from '../Empolyee';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formvalue!:FormGroup;
  empoyleedata:empoylee=new empoylee();
  EmpolyeeDATA:empoylee[]=[];
  constructor(private fbuilder:FormBuilder,private sb:ApiService){}
  ngOnInit(){
    this.formvalue=this.fbuilder.group({
       firstname:[''],
       lastname:[''],
       email:[''],
       mobile:[''],
       salary:['']
    })
    this.getdata();
  }

  adddata(){
    this.empoyleedata.firstname=this.formvalue.value.firstname;
    this.empoyleedata.lastname=this.formvalue.value.lastname;
    this.empoyleedata.email=this.formvalue.value.email;
    this.empoyleedata.mobile=this.formvalue.value.mobile;
    this.empoyleedata.salary=this.formvalue.value.salary;
    

    this.sb.postEmpoylee(this.empoyleedata).subscribe((data)=>{
      console.log(data)
    this.formvalue.reset();
    this.getdata();
    })
  }
  getdata(){
    this.sb.getEmpolyee().subscribe((res:any)=>{
      this.EmpolyeeDATA=res;
    })
  }
deletdata(e:any){
  this.sb.deleteEmpoylee(e.id).subscribe((res)=>{
    // console.log(res);
    alert('are you sure delete for data...');
    window.location.reload();
    
  })
}

update(e:any){
  this.empoyleedata.id=e.id;
  this.formvalue.controls['firstname'].setValue(e.firstname);
  this.formvalue.controls['lastname'].setValue(e.lastname);
  this.formvalue.controls['email'].setValue(e.email);
  this.formvalue.controls['mobile'].setValue(e.mobile);
  this.formvalue.controls['salary'].setValue(e.salary);
}

updateEmpoylee(){
  this.empoyleedata.firstname=this.formvalue.value.firstname;
  this.empoyleedata.lastname=this.formvalue.value.lastname;
  this.empoyleedata.email=this.formvalue.value.email;
  this.empoyleedata.mobile=this.formvalue.value.mobile;
  this.empoyleedata.salary=this.formvalue.value.salary;
  this.sb.updateEmpoylee(this.empoyleedata,this.empoyleedata.id).subscribe((res)=>{
    console.log(res);
    window.location.reload()
    
  })
}
}
