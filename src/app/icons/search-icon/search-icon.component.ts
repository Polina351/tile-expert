import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-search-icon]',
    imports: [],
    templateUrl: './search-icon.component.svg',
    styleUrl: './search-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '18',
        height: '18',
        viewBox: '0 0 18 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class SearchIconComponent {

}
