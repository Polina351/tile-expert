import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-button-me',
    imports: [],
    templateUrl: './button-me.component.html',
    styleUrl: './button-me.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonMeComponent {
    text: InputSignal<string> = input<string>('Я');
}
