import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-arrow-back-icon]',
    imports: [],
    templateUrl: './arrow-back-icon.component.svg',
    styleUrl: './arrow-back-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class ArrowBackIconComponent {

}
