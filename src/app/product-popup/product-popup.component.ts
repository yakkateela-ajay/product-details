import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss']
})
export class ProductPopupComponent implements OnInit {

  @Input('dataFromParent') public modalRef!: BsModalRef;
  @Input() product:any;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  close(){
    this.modalRef.hide();
  }

}
