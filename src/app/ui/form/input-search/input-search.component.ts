import {ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import { ButtonIconComponent } from '../../buttons/button-icon/button-icon.component';
import { SearchIconComponent } from '../../../icons/search-icon/search-icon.component';

@Component({
  selector: 'app-input-search',
    imports: [
        ButtonIconComponent,
        SearchIconComponent
    ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent {
    isActive: InputSignal<boolean> = input<boolean>(false);

    searchButtonClick: OutputEmitterRef<void> = output<void>();
    inputFocus: OutputEmitterRef<void> = output<void>();
    inputBlur: OutputEmitterRef<void> = output<void>();

    protected onSearchButtonClick(): void {
        this.searchButtonClick.emit();
    }

    protected onInputClick(event: MouseEvent) {
        event.stopPropagation();
    }

    protected onInputFocus() {
        this.inputFocus.emit();
    }

    protected onInputBlur() {
        this.inputBlur.emit();
    }
}
