import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-history-icon]',
    imports: [],
    templateUrl: './history-icon.component.svg',
    styleUrl: './history-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '21',
        height: '18',
        viewBox: '0 0 21 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class HistoryIconComponent {

}
