import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {ButtonMeComponent} from '../../buttons/button-me/button-me.component';

@Component({
    selector: 'app-text-field-outline',
    imports: [
        ButtonMeComponent
    ],
    templateUrl: './text-field-outline.component.html',
    styleUrl: './text-field-outline.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldOutlineComponent {
    legend: InputSignal<string> = input<string>('Автор');
    placeholder: InputSignal<string> = input<string>('Имя или должность');
}
