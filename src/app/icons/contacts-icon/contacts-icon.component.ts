import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-contacts-icon]',
    imports: [],
    templateUrl: './contacts-icon.component.svg',
    styleUrl: './contacts-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '20',
        height: '14',
        viewBox: '0 0 20 14',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class ContactsIconComponent {

}
