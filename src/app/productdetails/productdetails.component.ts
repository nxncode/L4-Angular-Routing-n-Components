import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id:any=0;
  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
  }

}
