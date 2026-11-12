import { Component } from '@angular/core';

interface FilterOption {
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  title: string;
  initialCount: number;
  options: FilterOption[];
}

@Component({
  selector: 'icourse-filter',
  imports: [],
  templateUrl: './filter.html',
})
export class Filter {
  readonly groups: FilterGroup[] = [
    {
      id: 'subject',
      title: 'الموضوع',
      initialCount: 4,
      options: [
        { label: 'تصميم تجربة المستخدم UX' },
        { label: 'تصميم واجهة المستخدم UI' },
        { label: 'Photoshop' },
        { label: 'جرافيك ديزاين' },
        { label: 'تصميم الويب' },
        { label: 'الرسم الرقمي' },
      ],
    },
    {
      id: 'level',
      title: 'المستوى',
      initialCount: 4,
      options: [
        { label: 'جميع المستويات', count: 1156 },
        { label: 'المبتدئ', count: 512 },
        { label: 'المتوسط', count: 300 },
        { label: 'المتقدم', count: 150 },
        { label: 'خبير', count: 194 },
      ],
    },
    {
      id: 'price',
      title: 'السعر',
      initialCount: 2,
      options: [
        { label: 'مجاني', count: 320 },
        { label: 'مدفوع', count: 1200 },
      ],
    },
  ];

  private readonly openGroups = new Set(this.groups.map(group => group.id));
  private readonly expandedGroups = new Set<string>();
  private readonly selectedOptions = new Set<string>();

  isOpen(id: string): boolean {
    return this.openGroups.has(id);
  }

  toggleGroup(id: string): void {
    this.toggleSet(this.openGroups, id);
  }

  isMore(id: string): boolean {
    return this.expandedGroups.has(id);
  }

  toggleMore(id: string): void {
    this.toggleSet(this.expandedGroups, id);
  }

  visibleOptions(group: FilterGroup): FilterOption[] {
    return this.isMore(group.id) ? group.options : group.options.slice(0, group.initialCount);
  }

  isSelected(groupId: string, label: string): boolean {
    return this.selectedOptions.has(`${groupId}:${label}`);
  }

  toggleOption(groupId: string, label: string): void {
    this.toggleSet(this.selectedOptions, `${groupId}:${label}`);
  }

  private toggleSet(set: Set<string>, value: string): void {
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
  }
}
