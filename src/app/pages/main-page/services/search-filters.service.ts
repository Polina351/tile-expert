import { Injectable, signal, WritableSignal } from '@angular/core';
import { ICheckboxGroup } from '../filters/filters.types';

@Injectable({
    providedIn: 'root'
})
export class SearchFiltersService {
    public isActiveSearch: WritableSignal<boolean> = signal(false);
    public isActiveFilter: WritableSignal<boolean> = signal(false);
    public isSearchMobileOpen: WritableSignal<boolean> = signal<boolean>(false);

    public searchHistoryList: string[] = [
        'закрепить теги',
        'кнопка',
        'приложение',
        'форма',
        'текстовое поле'
    ];

    public checkboxGroups: ICheckboxGroup[] = [
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

    constructor() { }

    public onSearchButtonClick(): void {

        if (!this.isActiveSearch()) {
            this.isActiveSearch.set(true);
        }
    }

    public onInputFocus(): void {
        this.isActiveFilter.set(true);
    }

    public searchInputClose(): void {
        if (this.isActiveSearch() && !this.isSearchMobileOpen()) {
            this.isActiveSearch.set(false);
            this.isActiveFilter.set(false);
        }
    }

    public openSearchInputMobile(): void {
        if (!this.isSearchMobileOpen()) {
            this.isSearchMobileOpen.set(true);
            this.isActiveSearch.set(true);
            this.isActiveFilter.set(true);
        }
    }

    public closeSearchInputMobile(): void {
        if (this.isSearchMobileOpen()) {
            this.isSearchMobileOpen.set(false);
            this.isActiveSearch.set(false);
            this.isActiveFilter.set(false);
        }
    }
}
