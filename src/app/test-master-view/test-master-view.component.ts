import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNodeDataItem } from '@microsoft/windows-admin-center-sdk/angular';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sme-test-master-view',
    templateUrl: './test-master-view.component.html',
    styleUrls: ['./test-master-view.component.css']
})
export class TestMasterViewComponent implements OnInit {
    public tree$: Observable<TreeNodeDataItem[]>;
    public selection: TreeNodeDataItem[] = [];

    constructor() {
        //
    }

    public ngOnInit() {
        const treeData: TreeNodeDataItem[] = [
            {
                data: {
                    name: 'lxca1',
                    ipAddress: '10.2.3.4'
                },
                children: [
                    {
                        data: {
                            name: 'server1',
                            ipAddress: '11.2.3.4'
                        }
                    },
                    {
                        data: {
                            name: 'server2',
                            ipAddress: '11.2.3.5'
                        }
                    },
                    {
                        data: {
                            name: 'server3',
                            ipAddress: '11.2.3.6'
                        }
                    }
                ]
            },
            {
                data: {
                    name: 'lxca2',
                    ipAddress: '10.2.3.5'
                },
                children: [
                    {
                        data: {
                            name: 'server6',
                            ipAddress: '12.2.3.4'
                        }
                    },
                    {
                        data: {
                            name: 'server7',
                            ipAddress: '12.2.3.5'
                        }
                    },
                    {
                        data: {
                            name: 'server8',
                            ipAddress: '12.2.3.6'
                        }
                    }
                ]
            }
        ];
        this.tree$ = Observable.of(treeData);
    }

    public clearSelection() {
        this.selection = [];
    }

    public updateData() {
        const newTreeData: TreeNodeDataItem[] = [
            {
                data: {
                    name: 'lxca1',
                    ipAddress: '10.2.3.4'
                },
                children: [
                    {
                        data: {
                            name: 'server1',
                            ipAddress: '11.2.3.4'
                        }
                    },
                    {
                        data: {
                            name: 'server2',
                            ipAddress: '11.2.3.5'
                        }
                    },
                    {
                        data: {
                            name: 'server3',
                            ipAddress: '11.2.3.6'
                        }
                    }
                ]
            }
        ];
        this.tree$ = Observable.of(newTreeData);
    }
}
