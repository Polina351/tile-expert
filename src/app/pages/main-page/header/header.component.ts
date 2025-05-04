import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
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
        BurgerIconComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(click)': 'onHeaderClick()',
    }
})
export class HeaderComponent {
    protected isActiveSearch: WritableSignal<boolean> = signal(false);
    protected isActiveFilter: WritableSignal<boolean> = signal(false);

    protected searchHistoryList: string[] = [
        'закрепить теги',
        'кнопка',
        'приложение',
        'форма',
        'текстовое поле'
    ];

    protected checkboxGroups: ICheckboxGroup[] = [
        {
            groupName: '',
            groupKey: 'main',
            items: [
                { label: 'Я участник', name: 'isParticipant', checked: false },
                { label: 'Строгий поиск', name: 'strictSearch', checked: false },
                { label: 'В заголовках', name: 'inHeaders', checked: false }
            ]
        },
        {
            groupName: 'Только',
            groupKey: 'only',
            items: [
                { label: 'Теги', name: 'tags', checked: false },
                { label: 'Просьбы', name: 'requests', checked: false },
                { label: 'Контакты', name: 'contacts', checked: false }
            ]
        }
    ];

    protected onSearchButtonClick(): void {

        if (!this.isActiveSearch()) {
            this.isActiveSearch.set(true);
        }
    }

    protected onHeaderClick(): void {
        console.log('Header clicked');

        if (this.isActiveSearch()) {
            this.isActiveSearch.set(false);
            this.isActiveFilter.set(false);
        }
    }

    protected onInputFocus(): void {
        this.isActiveFilter.set(true);
    }

    protected onInputBlur(): void {
        //this.isActiveFilter.set(false);
    }
}
