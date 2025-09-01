import { Component, OnInit, inject } from '@angular/core';
import { ContactServices } from '../services/contact-services';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../model/contact.interface';

@Component({
  selector: 'app-contact-list-component',
  imports: [DatePipe, RouterModule],
  templateUrl: './contact-list-component.html',
  styleUrl: './contact-list-component.css',
})
export default class ContactListComponent implements OnInit {
  // Se importar el servicio: Contact Services
  private contactServices = inject(ContactServices);

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.contactServices.list().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(contact: Contact) {
    this.contactServices.delete(contact.id).subscribe(() => {
      this.loadAll();
    });
  }
}
