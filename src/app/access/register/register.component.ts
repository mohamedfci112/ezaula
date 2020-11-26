import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  modalRef: BsModalRef;
  disableUploadHeaderBtn = true;
  imagePath; profilePic;
  validation_messages = {
    'firstname': [
      { type: 'required', message: 'This Required Field' },
    ],
    'lastname': [
      { type: 'required', message: 'This Required Field' },
    ],
    'password': [
      { type: 'required', message: 'This Required Field' },
    ],
    'confirmation_password': [
      { type: 'required', message: 'This Required Field' },
    ],
    'email': [
      { type: 'required', message: 'This Required Field' },
      { type: 'email', message: 'example :name@Ezaula.com' },
    ],
    'gender': [
      { type: 'required', message: 'This Required Field' },
    ]
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'confirmation_password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('0', [Validators.required]),
      'year': new FormControl(null, [Validators.required]),
      'month': new FormControl(null, [Validators.required]),
      'day': new FormControl(null, [Validators.required]),
    });
  }
  openModal(modalName: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalName);
  }
  uploadPhoto() {

  }

  preview(files, select) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profilePic = '';
      this.profilePic = reader.result;
      this.disableUploadHeaderBtn = false;
    };
  }
  submitForm() {

  }
}
