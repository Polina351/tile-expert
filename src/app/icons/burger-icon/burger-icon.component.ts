import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-burger-icon]',
    imports: [],
    templateUrl: './burger-icon.component.svg',
    styleUrl: './burger-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class BurgerIconComponent {

}
