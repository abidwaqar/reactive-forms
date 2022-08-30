import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
        firstName:['', [Validators.required, Validators.minLength(4)]],
        lastName: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
        aliases: this.formBuilder.array([
            this.formBuilder.control(''),
        ])
    });
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  get firstName(): FormControl {
    return this.profileForm.get('firstName') as FormControl;
  }

  addAlias(): void {
    this.aliases.push(this.formBuilder.control(''));
  }

  updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit(): void {
    console.log(this.profileForm);
  }
}
