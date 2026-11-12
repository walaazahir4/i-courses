import { Component, signal } from '@angular/core';
import { DataCard } from '../../../shared/data-card/data-card';
import { Filter } from '../../../shared/filter/filter';

@Component({
  selector: 'icourse-courses',
  imports: [DataCard, Filter],
  templateUrl: './courses.html',
})
export class Courses {
isFilterOpen = signal(false);
isFilterPanelOpen = signal(false);

toggleFilter() {
  this.isFilterOpen.update(value => !value);
}

toggleFilterPanel() {
  this.isFilterPanelOpen.update(value => !value);
}


}
