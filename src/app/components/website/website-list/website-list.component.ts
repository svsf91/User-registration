import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites = [{}];
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsiteByUser(this.userId);
  }
  // goBack() {
  //   this.router.navigate(['/user', this.userId]);
  // }
  // editWebsite(websiteId: string) {
  //   this.router.navigate(['/user', this.userId, 'website', websiteId]);
  // }
}
