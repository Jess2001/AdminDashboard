import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MainComponent } from "./main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SideNavComponent, TopWidgetsComponent, MainComponent,]
})
export class AppComponent {
  title = 'testtproject';
}
