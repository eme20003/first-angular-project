import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DropdownDirective } from './dropdown.directive';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageEditComponent,
    DocumentsComponent,
    DropdownDirective,
    ContactsComponent,
    ContactDetailComponent,
    ContactItemComponent,
    ContactListComponent,
    DocumentListComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    DocumentEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AppRoutingModule, RouterModule, FormsModule, DndModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
