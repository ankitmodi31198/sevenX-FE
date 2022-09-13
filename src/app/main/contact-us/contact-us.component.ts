import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsAnimationOption: AnimationOptions = {
    path: 'assets/contact_us.json'
  }

  constructor(
    public dialogRef: MatDialogRef<ContactUsComponent>
  ) { }

  ngOnInit(): void {
  }

  contactFormSubmissionHandler() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
