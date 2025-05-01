import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {MenuItemComponent} from '../../../ui/menu/menu-item/menu-item.component';
import {LinkIconComponent} from '../../../icons/link-icon/link-icon.component';
import {ContactsIconComponent} from '../../../icons/contacts-icon/contacts-icon.component';
import {TagIconComponent} from '../../../icons/tag-icon/tag-icon.component';
import {FavoritesIconComponent} from '../../../icons/favorites-icon/favorites-icon.component';
import {HistoryIconComponent} from '../../../icons/history-icon/history-icon.component';

@Component({
    selector: 'app-header',
    imports: [
        MenuComponent,
        MenuItemComponent,
        LinkIconComponent,
        ContactsIconComponent,
        TagIconComponent,
        FavoritesIconComponent,
        HistoryIconComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
