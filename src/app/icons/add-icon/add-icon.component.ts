import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-add-icon]',
    imports: [],
    templateUrl: './add-icon.component.svg',
    styleUrl: './add-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class AddIconComponent {

}
