import { Component, OnInit, inject } from '@angular/core';
import { ContactServices } from '../services/contact-services';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact-list-component',
  imports: [DatePipe, RouterModule],
  templateUrl: './contact-list-component.html',
  styleUrl: './contact-list-component.css'
})
export default class ContactListComponent implements OnInit {

  // Se importar el servicio: Contact Services
  private contactServices = inject(ContactServices);

  contacts : any = []


  ngOnInit(): void {
    this.contactServices.list()
    .subscribe((contacts : any) => {
      this.contacts = contacts;
    });
  }
  
}
