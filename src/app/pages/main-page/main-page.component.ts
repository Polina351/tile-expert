import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FiltersComponent} from './filters/filters.component';
import {HistoryComponent} from '../../ui/search/history/history.component';
import {InputSearchComponent} from '../../ui/form/input-search/input-search.component';
import {SearchFiltersService} from './services/search-filters.service';

@Component({
    selector: 'app-main-page',
    imports: [
        HeaderComponent,
        FiltersComponent,
        HistoryComponent,
        InputSearchComponent
    ],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(click)': 'this.searchFiltersService.searchInputClose()',
    }
})
export class MainPageComponent {
    protected searchFiltersService: SearchFiltersService = inject(SearchFiltersService);

}
