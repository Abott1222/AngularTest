import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  AddArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    //console.log(`Adding title ${title.value} and link $(link.value)`);
    console.log(title.value,link.value);

    return false;
  }
}
