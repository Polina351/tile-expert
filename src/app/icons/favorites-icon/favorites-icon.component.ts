import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-favorites-icon]',
    imports: [],
    templateUrl: './favorites-icon.component.svg',
    styleUrl: './favorites-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '20',
        height: '19',
        viewBox: '0 0 20 19',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class FavoritesIconComponent {

}
