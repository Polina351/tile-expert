import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {MenuItemComponent} from '../../../ui/menu/menu-item/menu-item.component';
import {LinkIconComponent} from '../../../icons/link-icon/link-icon.component';
import {ContactsIconComponent} from '../../../icons/contacts-icon/contacts-icon.component';
import {TagIconComponent} from '../../../icons/tag-icon/tag-icon.component';
import {FavoritesIconComponent} from '../../../icons/favorites-icon/favorites-icon.component';
import {HistoryIconComponent} from '../../../icons/history-icon/history-icon.component';
import {InputSearchComponent} from '../../../ui/form/input-search/input-search.component';
import {FiltersComponent} from '../filters/filters.component';
import {HistoryComponent} from '../../../ui/search/history/history.component';
import {ICheckboxGroup} from '../filters/filters.types';
import {ButtonIconComponent} from '../../../ui/buttons/button-icon/button-icon.component';
import {AddIconComponent} from '../../../icons/add-icon/add-icon.component';
import {
    HeaderNotificationsComponent
} from '../../../ui/notifications/header-notifications/header-notifications.component';
import {BurgerIconComponent} from '../../../icons/burger-icon/burger-icon.component';
import {SearchFiltersService} from '../services/search-filters.service';
import {SearchIconComponent} from '../../../icons/search-icon/search-icon.component';

@Component({
    selector: 'app-header',
    imports: [
        MenuComponent,
        MenuItemComponent,
        LinkIconComponent,
        ContactsIconComponent,
        TagIconComponent,
        FavoritesIconComponent,
        HistoryIconComponent,
        InputSearchComponent,
        FiltersComponent,
        HistoryComponent,
        ButtonIconComponent,
        AddIconComponent,
        HeaderNotificationsComponent,
        BurgerIconComponent,
        SearchIconComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(click)': 'this.searchFiltersService.searchInputClose()',
    }
})
export class HeaderComponent {

    protected searchFiltersService: SearchFiltersService = inject(SearchFiltersService);


}
