import { Component, signal } from '@angular/core';
import { DataCard } from '../../../shared/data-card/data-card';

@Component({
  selector: 'icourse-courses',
  imports: [DataCard],
  templateUrl: './courses.html',
})
export class Courses {
  isOpen = signal(false);
isFilterOpen = signal(false);
isSortOpen = signal(false);
  selectedSort = signal('فرز');

toggleFilter() {
  this.isFilterOpen.update(value => !value);
  this.isSortOpen.set(false);
}

toggleSort() {
  this.isSortOpen.update(value => !value);
  this.isFilterOpen.set(false);
}
  toggleDropdown() {
    this.isOpen.update(value => !value);
  }
}
