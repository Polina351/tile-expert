import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-link-icon]',
    imports: [],
    templateUrl: './link-icon.component.svg',
    styleUrl: './link-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '18',
        height: '18',
        viewBox: '0 0 18 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class LinkIconComponent {

}
