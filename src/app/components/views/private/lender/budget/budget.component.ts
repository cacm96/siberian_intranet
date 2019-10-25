import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import { FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { MatChipInputEvent} from '@angular/material/chips';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'sib-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  serviceCtrl = new FormControl();
  filteredServices: Observable<string[]>;
  services: any = [];
  allservices: any = [
  {
    id: 1,
    name: 'Reparar'
  },
  {
    id: 2,
    name: 'Pintar'
  },
  {
    id: 3,
    name: 'Lijar'
  }
];
  @ViewChild('serviceInput') serviceInput: ElementRef; 
  
  
  
  constructor(private _location: Location) {

    this.filteredServices = this.serviceCtrl.valueChanges.pipe(
      startWith(null),
      map((service: string | null) => service ? this._filter(service) : this.allservices.slice()));
   }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    debugger
    const input = event.input;
    const value = event.value;
    // Add our service
    if ((value || '').trim()) {
      this.services.push({
        id:Math.random(),
        name:value.trim()
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.serviceCtrl.setValue(null);
  }

  remove(service, indx): void {
    this.services.splice(indx, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.services.push(event.option.value);
    this.serviceInput.nativeElement.value = '';
    this.serviceCtrl.setValue(null);
  }

  private _filter(value: any): any[] {
    
    return this.allservices.filter(service => service.name.toLowerCase().includes(value.toString().toLowerCase()));
  }

  goBack() {
    this._location.back();
  }
}

