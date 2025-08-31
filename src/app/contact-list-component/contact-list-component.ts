import { Component, OnInit, inject } from '@angular/core';
import { ContactServices } from '../services/contact-services';


@Component({
  selector: 'app-contact-list-component',
  imports: [],
  templateUrl: './contact-list-component.html',
  styleUrl: './contact-list-component.css'
})
export default class ContactListComponent implements OnInit {

  // Se importar el servicio: Contact Services
  private contactServices = inject(ContactServices);

  ngOnInit(): void {
    this.contactServices.list()
    .subscribe((contacts) => {
      console.log(contacts);
    });
  }
  
}
