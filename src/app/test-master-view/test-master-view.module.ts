import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestMasterViewComponent } from './test-master-view.component';
import { Routing } from './test-master-view.routing';
import {
    DataTableModule,
    MasterViewModule,
    DetailsModule,
    SplitViewModule,
    ActionsModule,
    DropdownModule,
    IconModule
} from '@microsoft/windows-admin-center-sdk/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        Routing,
        DataTableModule,
        MasterViewModule,
        DetailsModule,
        SplitViewModule,
        FormsModule,
        ReactiveFormsModule,
        ActionsModule,
        DropdownModule,
        IconModule
    ],
    declarations: [TestMasterViewComponent]
})
export class TestMasterViewModule {}
