import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-history',
    imports: [],
    templateUrl: './history.component.html',
    styleUrl: './history.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
    historyItems: InputSignal<string[]> = input<string[]>([]);

}
