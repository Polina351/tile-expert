import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {MenuItemComponent} from '../../../ui/menu/menu-item/menu-item.component';
import {LinkIconComponent} from '../../../icons/link-icon/link-icon.component';
import {ContactsIconComponent} from '../../../icons/contacts-icon/contacts-icon.component';
import {TagIconComponent} from '../../../icons/tag-icon/tag-icon.component';
import {FavoritesIconComponent} from '../../../icons/favorites-icon/favorites-icon.component';
import {HistoryIconComponent} from '../../../icons/history-icon/history-icon.component';
import {InputSearchComponent} from '../../../ui/form/input-search/input-search.component';

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
        InputSearchComponent
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

    protected onSearchButtonClick(): void {

        if (!this.isActiveSearch()) {
            this.isActiveSearch.set(true);
        }
    }

    protected onHeaderClick(): void {

        if (this.isActiveSearch()) {
            this.isActiveSearch.set(false);
        }
    }

    protected onInputFocus(): void {
        this.isActiveFilter.set(true);
    }

    protected onInputBlur(): void {
        this.isActiveFilter.set(false);
    }
}
