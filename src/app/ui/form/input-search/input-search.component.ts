import {ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import { ButtonIconComponent } from '../../buttons/button-icon/button-icon.component';
import { SearchIconComponent } from '../../../icons/search-icon/search-icon.component';
import {ArrowBackIconComponent} from '../../../icons/arrow-back-icon/arrow-back-icon.component';

@Component({
    selector: 'app-input-search',
    imports: [
        ButtonIconComponent,
        SearchIconComponent,
        ArrowBackIconComponent
    ],
    templateUrl: './input-search.component.html',
    styleUrl: './input-search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent {
    isActive: InputSignal<boolean> = input<boolean>(false);

    searchButtonClick: OutputEmitterRef<void> = output<void>();
    backButtonClick: OutputEmitterRef<void> = output<void>();
    inputFocus: OutputEmitterRef<void> = output<void>();
    inputBlur: OutputEmitterRef<void> = output<void>();

    public onSearchButtonClick(): void {
        this.searchButtonClick.emit();
    }

    public onInputClick(event: MouseEvent): void {
        event.stopPropagation();
    }

    public onInputFocus(): void {
        this.inputFocus.emit();
    }

    public onBackButtonClick(): void {
        this.backButtonClick.emit();
    }

}
