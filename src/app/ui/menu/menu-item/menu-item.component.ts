import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-menu-item',
    imports: [],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
    label: InputSignal<string> = input<string>('');
}
