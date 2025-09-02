import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactServices } from '../services/contact-services';
import { Contact } from '../model/contact.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export default class ContactForm implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private contactServices = inject(ContactServices);

  form?: FormGroup;
  contact?: Contact;
  errors: string[] = [];

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.contactServices.get(parseInt(id)).subscribe((contact) => {
        this.contact = contact;
        this.form = this.formBuilder.group({
          id: [contact.id],
          name: [contact.name, [Validators.required]],
          email: [contact.email, [Validators.required, Validators.email]],
        });
      });
    } else {
      this.form = this.formBuilder.group({
        name: ['',Validators.required],
        email: ['',Validators.required, Validators.email],
      });
    }
  }

  save() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const contactForm = this.form!.value;
    let request: Observable<Contact>;

    if (this.contact) {
      request = this.contactServices.update(this.contact.id,contactForm)
    } else {
      request = this.contactServices.create(contactForm);
    }
    
    request
      .subscribe({
        next: () => {
          this.errors = [];
          this.router.navigate(['/']);
        },
        error: response =>{
          this.errors = response.error.errors;  
        }
      });
    }
  }