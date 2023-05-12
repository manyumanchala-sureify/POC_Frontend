import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-resuming',
  templateUrl: './resuming.component.html',
  styleUrls: ['./resuming.component.css']
})

export class ResumingComponent {

  form!: FormGroup;
  message: string[]=[];
  res:any;

  public separatorKeysCodes = [ENTER, COMMA];
  removable = true;
  bccEmailList: string[]=[];

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient
    ){}

  ngOnInit():void{
    this.form=this.formBuilder.group({
      name:'',
      toEmail:'',
      ccEmail:this.formBuilder.array([]),
      bccEmail:this.formBuilder.array([]),
      subject:'',
      body:'',
      url:'',
    })
    console.log("oninit",this.form.getRawValue())
  }

  // add(event:MatChipInputEvent): void {
  //   console.log(event.value)
  //   if (event.value) {
  //     // this.form.get
  //     this.bccEmailList.push(event.value)
  //     console.log("ppp",this.bccEmailList)
  //     // if (this.validateEmail(event.value)) {
  //     //   this.emailList.push({ value: event.value, invalid: false });
  //     // } else {
  //     //   this.emailList.push({ value: event.value, invalid: true });
  //     //   this.rulesForm.controls['emails'].setErrors({'incorrectEmail': true});
  //     // }
  //   }
  //   if (event.input) {
  //     event.input.value = '';
  //   }
  // }

  get ccEmailFunc(): FormArray {
    return this.form.controls['ccEmail'] as FormArray;
  }

  get bccEmailFunc(): FormArray {
    return this.form.controls['bccEmail'] as FormArray;
  }

  addCC(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || "").trim()) {
      this.ccEmailFunc.push(this.formBuilder.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  addBcc(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || "").trim()) {
      this.bccEmailFunc.push(this.formBuilder.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  removeCCEmail(index: number): void {
    console.log('Removing ' + index)
    let ccEmailList=<FormArray>this.form.controls['ccEmail'];
    
    ccEmailList.removeAt(index)
    this.form.controls['ccEmail'].setValue(ccEmailList)
  }

  removeBCCEmail(index: number): void {
    console.log('Removing ' + index)
    let bccEmailList=<FormArray>this.form.controls['bccEmail'];
    
    bccEmailList.removeAt(index)
    this.form.controls['bccEmail'].setValue(bccEmailList)
  }

  send():void{
    this.http.post('http://localhost:8000/mail/sendMail',this.form.getRawValue())
    .subscribe(
      (response)=>{
        this.res=response;
        this.message=this.res.data.message;
        this.form=this.formBuilder.group({
          name:'',
          toEmail:'',
          ccEmail:this.formBuilder.array([]),
          bccEmail:this.formBuilder.array([]),
          subject:'',
          body:'',
          url:'',
        })
      },
      (error)=>{
        this.message=error.error.data.message;
        // this.form=this.formBuilder.group({
        //   name:'',
        //   toEmail:'',
        //   ccEmail:this.formBuilder.array([]),
        //   bccEmail:this.formBuilder.array([]),
        //   subject:'',
        //   body:'',
        //   url:'',
        // })
      }
    )
  }

}
