export interface ICheckboxItem {
    label: string;
    name: string;
    checked: boolean;
    disabled?: boolean;
}

export interface ICheckboxGroup {
    groupName: string;
    groupKey: string;
    items: ICheckboxItem[];
}
