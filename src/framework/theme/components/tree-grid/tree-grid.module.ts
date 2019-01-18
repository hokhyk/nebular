/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';

import { NbTreeGridComponent } from './tree-grid.component';
import {
  NbCellDefDirective,
  NbCellDirective,
  NbColumnDefDirective,
  NbFooterCellDefDirective,
  NbFooterCellDirective,
  NbHeaderCellDefDirective,
  NbHeaderCellDirective,
} from './tree-grid-cell';
import {
  NbFooterRowComponent,
  NbFooterRowDefDirective,
  NbHeaderRowComponent,
  NbHeaderRowDefDirective,
  NbRowComponent,
  NbRowDefDirective,
} from './tree-grid-row';
import { NbSortDirective, NbSortHeaderDirective } from './tree-grid-sort';
import { NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridSortService } from './data-source/tree-grid-sort.service';
import { NbTreeGridFilterService } from './data-source/tree-grid-filter.service';
import { NbTreeGridService } from './data-source/tree-grid.service';
import { NbFilterDirective, NbFilterInputDirective } from './tree-grid-filter';

const COMPONENTS = [
  // Tree Grid
  NbTreeGridComponent,

  // Template defs
  NbHeaderCellDefDirective,
  NbHeaderRowDefDirective,
  NbColumnDefDirective,
  NbCellDefDirective,
  NbRowDefDirective,
  NbFooterCellDefDirective,
  NbFooterRowDefDirective,

  // Cell directives
  NbHeaderCellDirective,
  NbCellDirective,
  NbFooterCellDirective,

  // Row directives
  NbHeaderRowComponent,
  NbRowComponent,
  NbFooterRowComponent,

  // Sort directives
  NbSortDirective,
  NbSortHeaderDirective,

  // Filter directives
  NbFilterDirective,
  NbFilterInputDirective,
];

@NgModule({
  imports: [CdkTableModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [
    NbTreeGridSortService,
    NbTreeGridFilterService,
    NbTreeGridService,
    NbTreeGridDataSourceBuilder,
  ],
})
export class NbTreeGridModule {
}