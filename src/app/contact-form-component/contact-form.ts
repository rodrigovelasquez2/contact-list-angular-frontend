import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactServices } from '../services/contact-services';

@Component({
  selector: 'app-contact-form',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export default class ContactForm {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private contactServices = inject(ContactServices);


  form = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
  });

  create(){
    const contact = this.form.value;
    this.contactServices.create(contact).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
