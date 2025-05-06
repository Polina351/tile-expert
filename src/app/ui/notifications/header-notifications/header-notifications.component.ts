import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {NotificationsIconComponent} from '../../../icons/notifications-icon/notifications-icon.component';

@Component({
    selector: 'app-header-notifications',
    imports: [
        NotificationsIconComponent
    ],
    templateUrl: './header-notifications.component.html',
    styleUrl: './header-notifications.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNotificationsComponent {
    notificationCount: InputSignal<number | string> = input<number|  string>(32);
}
