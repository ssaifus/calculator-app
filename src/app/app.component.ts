import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App Component';
  a = 15;
  b = 30;
  c1 = {};
  c2 = {};
  c3 = {};
  c4 = {};
  fac1 = 1;
  fac2 = 1;
  count1 = 0;
  count2 = 0;
  addnum()
  {
    this.c1 = this.a + this.b;
  }
  subnum()
  {
    this.c2 = this.a - this.b;
  }
  multinum()
  {
    this.c3 = this.a * this.b;
  }
  divnum()
  {
    this.c4 = this.a / this.b
  }
  factnum1()
  {
    for(let i = 1; i <= this.a; i++)
    {
      this.fac1 = this.fac1 * i;
    }
  }
  factnum2()
  {
    for(let i = 1; i <= this.b; i++)
    {
      this.fac2 = this.fac2 * i;
    }
  }
  primenum1()
  {
    for(let i = 2; i<= (this.a)/2; i++)
    {
      if (this.a % i == 0) 
      {
        this.count1 = 1;
        break;
      }
    }

  }
  primenum2()
  {
    for(let i = 2; i<= (this.b)/2; i++)
    {
      if (this.b % i == 0) 
      {
        this.count2 = 1;
        break;
      }
    }
  }
}
