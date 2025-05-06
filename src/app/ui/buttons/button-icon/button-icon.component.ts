import {ChangeDetectionStrategy, Component, output, OutputEmitterRef} from '@angular/core';

@Component({
    selector: 'app-button-icon',
    imports: [],
    templateUrl: './button-icon.component.html',
    styleUrl: './button-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {
    buttonClick: OutputEmitterRef<void> = output<void>();

    protected onButtonClick(event: MouseEvent): void {
        event.stopPropagation();
        this.buttonClick.emit();
    }
}
