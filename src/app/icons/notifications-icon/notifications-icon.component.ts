import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-notifications-icon]',
    imports: [],
    templateUrl: './notifications-icon.component.svg',
    styleUrl: './notifications-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '16',
        height: '20',
        viewBox: '0 0 16 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }

})
export class NotificationsIconComponent {

}
