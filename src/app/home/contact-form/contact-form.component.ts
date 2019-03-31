import { Component, OnInit } from '@angular/core';

import { Contact }    from '../../models/Contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  model = new Contact( 0 ,'','','','','','');
  submitted = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() { 
    this.submitted = true; 
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
