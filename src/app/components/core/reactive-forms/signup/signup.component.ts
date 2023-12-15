import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  // Inject FormBuilder
  constructor(private fb: FormBuilder) { }

  // Initialize main form
  public mainForm!: FormGroup;

  ngOnInit(): void {
    // Create main Form
    this.mainForm = this.fb.group({

      // Initialize main controls
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required]],
      password: [null, [Validators.required]],

      // Initialize dynamic controls
      phones: this.fb.array([

        // Remove the unnecessary array here
        this.fb.control(null, [Validators.required])
      ])
    })
  }

  // Add more Phones
  public addPhone() {
    // We have to explicitly get the value as FormArray (Assertion / Type Casting) using '<>' assertion operator
    (<FormArray>this.mainForm.get('phones')).push(this.fb.control(null, [Validators.required]));
  }
  
  // To be able to use the phones controls in the template (avoid possibly null object)
  get Phones(): FormArray {
    return this.mainForm.get('phones') as FormArray;
  }

  // Submit Form
  submit(){
    console.log(this.mainForm)
  }

}
