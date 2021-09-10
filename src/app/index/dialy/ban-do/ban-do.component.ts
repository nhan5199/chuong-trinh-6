import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ban-do',
  templateUrl: './ban-do.component.html',
  styleUrls: ['./ban-do.component.css']
})
export class BanDoComponent implements OnInit {

  constructor(
    private modalService: NgbModal
    ,private location : Location
    ) { }

  ngOnInit(): void {
  }
  open(content : any) {
    this.modalService.open(content, { size:'lg',centered: true, windowClass: 'modal-rounded'});
  }

  close(){
    this.modalService.dismissAll();
  }

  cancel(){
    this.location.back();
  }
}
