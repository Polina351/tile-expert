import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {TextFieldOutlineComponent} from '../../../ui/form/text-field-outline/text-field-outline.component';
import {InputCheckboxComponent} from '../../../ui/form/input-checkbox/input-checkbox.component';
import {ICheckboxGroup} from './filters.types';

@Component({
  selector: 'app-filters',
    imports: [
        TextFieldOutlineComponent,
        InputCheckboxComponent
    ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
    checkboxGroups: InputSignal<ICheckboxGroup[]> = input<any>([]);

    public onClick (event: MouseEvent) {
        event.stopPropagation();
    }
}
