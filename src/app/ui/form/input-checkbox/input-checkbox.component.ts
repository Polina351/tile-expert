import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    input,
    InputSignal, model, ModelSignal,
    output,
    OutputEmitterRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

let CustomCheckboxComponent;

@Component({
    selector: 'app-input-checkbox',
    imports: [],
    templateUrl: './input-checkbox.component.html',
    styleUrl: './input-checkbox.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomCheckboxComponent),
            multi: true
        }
    ]
})
export class InputCheckboxComponent {
    label: InputSignal<string> = input<string>('');
    name: InputSignal<string> = input<string>('');

    disabled: ModelSignal<boolean> = model<boolean>(false);

    changed: OutputEmitterRef<boolean> = output<boolean>();


    value: ModelSignal<boolean> = model<boolean>(false);

    onChange: (value: boolean) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: boolean): void {
        this.value.set(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }

    toggleCheckbox(): void {
        if (!this.disabled()) {
            console.log(this.value())
            const newValue = !this.value();
            this.value.set(newValue);
            this.onChange(newValue);
            this.onTouched();
            this.changed.emit(newValue);
        }
    }
}
