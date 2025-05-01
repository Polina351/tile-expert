import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
    selector: 'app-main-page',
    imports: [
        HeaderComponent
    ],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
