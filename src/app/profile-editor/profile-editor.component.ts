import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        })
    });
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
