import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  standalone: false,
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  term: string = ''; 

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();

    this.contactService.contactChangedEvent.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }


  search(value: string): void {
    this.term = value;
  }
}
