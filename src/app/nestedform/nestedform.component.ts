import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, FormBuilder, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const phone = this.fb.group(
      {area:[], prefix:[], line:[] }
    );
    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    })
  }

  addCell() : void
  {
    console.log("hello");
  }

}
