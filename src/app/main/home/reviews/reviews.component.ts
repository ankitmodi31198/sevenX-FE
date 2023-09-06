import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reviews: any[] = [
    {
      blockquote: 'Helped me with my startup valuatioin and pitch deck. Team is very much approachable.',
      img: '../../../../assets/reviews_05.jpeg',
      author: 'Kshonish Jain',
      companyName: 'Founder of Hotels Group'
    },
    {
      blockquote: 'The 7xStartup platform is super easy to use and will be a reliable backbone of your business! It is fantastic to deal with when it comes to legal compliances.',
      img: '../../../../assets/client-avatar.png',
      author: 'Parth Lathiya',
      companyName: 'Government Employee'
    },
    {
      blockquote: 'You helped me with all the way to start a company and documentation for it. And you guys made everything simple and at a very nominal cost.',
      img: '../../../../assets/IMG-0043.jpg',
      author: 'Ankit Baser',
      companyName: 'Software Developer'
    },
    {
      blockquote: 'Never had an issue getting a fast response and solution. Best for getting startup registrations done.',
      img: '../../../../assets/IMG-0045.jpg',
      author: 'Hiren Babariya',
      companyName: 'IAS'
    },
    {
      blockquote: 'Great people nice experience thanks for your great support, They helped me with to start my startup.',
      img: '../../../../assets/client-avatar.png',
      author: 'Ronak Modi',
      companyName: 'Manager'
    },
  ]

}
