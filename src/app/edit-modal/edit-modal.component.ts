import { Component, OnInit } from '@angular/core';
import {EditModalService} from '../edit-modal.service';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(private editModalService: EditModalService) { }

  ngOnInit() {
  }

  get isModalActive() {
    return this.editModalService.isModalActive;
  }

  get modalData() {
    return this.editModalService.modalData;
  }

  hide() {
    this.editModalService.hideModal();
  }

  saveChanges() {

  }

}
