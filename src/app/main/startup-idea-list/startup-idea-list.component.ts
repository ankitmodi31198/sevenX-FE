import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { getFormControl, setFormControlValue } from 'src/app/app-utils';
import { StartupIdeaListService } from 'src/app/service/api/startup-idea-list.service';
import { StartupIdeaListGetModel } from 'src/app/service/models/startup-idea-list.model';
import { SortingOrder } from 'src/common-ui/directive/sortable-column.directive';
import { TableColumnsConfig, TableConfig, TablePaginationConfig } from 'src/common-ui/table/table-config';
import { TableColumnTypes } from 'src/common-ui/table/table-constants';
import { TableComponent } from 'src/common-ui/table/table.component';
import { StartupIdeaIndustryOptions, StartupIdeaStageOptions } from '../startup-idea-analysis/startup-idea-analysis-constants';

@Component({
  selector: 'sevenx-startup-idea-list',
  templateUrl: './startup-idea-list.component.html',
  styleUrls: ['./startup-idea-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartupIdeaListComponent implements OnInit {

  @ViewChild('startupIdeaList')
  orderTable: TableComponent;

  tableConfig: TableConfig;

  tableColumnsConfig: TableColumnsConfig[];

  tablePaginationConfig: TablePaginationConfig;

  filterForm: FormGroup;

  startupIdeaStageOptions: string[] = StartupIdeaStageOptions;

  filteredStartupIdeaStageOptions: string[] = [];

  startupIdeaIndustryOptions: string[] = StartupIdeaIndustryOptions;

  filteredStartupIdeaIndustryOptions: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private startupIdeaListService: StartupIdeaListService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.setTableComponentConfig();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      fromDate: [],
      toDate: [],
      startupName: [],
      contactNo: [],
      email: [],
      stage: [],
      industry: []
    });
    getFormControl('fromDate', this.filterForm).disable();
    getFormControl('toDate', this.filterForm).disable();
  }

  setTableComponentConfig() {
    this.tableConfig = this.getTableConfig();
    this.tableColumnsConfig = this.getTableColumnsConfig();
    this.tablePaginationConfig = this.getTablePaginationConfig();
  }

  getTableConfig(): TableConfig {
    const tableConfig: TableConfig = new TableConfig();
    tableConfig.showPagination = true;
    tableConfig.defaultSortingDetails = { sortField: 'created_at', sortOrder: SortingOrder.DESCENDING };
    tableConfig.dataLoadFunction = this.dataLoadFunction.bind(this);
    tableConfig.isRowClickable = true;
    return tableConfig;
  }

  dataLoadFunction(requestModel: any) {
    const filterModel = this.getFilterRequestModel();
    if (filterModel) {
      requestModel = requestModel ? Object.assign(requestModel, filterModel) : Object.assign({}, filterModel);
    }
    return this.startupIdeaListService.post(requestModel)
      .pipe(
        map((response) => {
          if (response && response.status && response.status === 200) {
            let result: StartupIdeaListGetModel[] = [];
            if (response.data) {
              if (response.data?.startupIdeaFormList?.length) {
                result = response.data.startupIdeaFormList.map((value: StartupIdeaListGetModel) => new StartupIdeaListGetModel().toLocal(value));
              }
              if (response.data.totalStartupIdeaFormCount) {
                this.tablePaginationConfig.totalCount = response.data.totalStartupIdeaFormCount;
              }
            }
            return result;
          }
        })
      )
  }

  getFilterRequestModel() {
    const filterModel = JSON.parse(JSON.stringify(this.filterForm.getRawValue()));
    if (filterModel.fromDate) {
      filterModel.fromDate = Date.parse(filterModel.fromDate);
    }
    if (filterModel.toDate) {
      filterModel.toDate = Date.parse(filterModel.toDate);
    }
    return filterModel;
  }

  getTableColumnsConfig(): TableColumnsConfig[] {
    return [
      {
        field: 'createdAt',
        columnHeader: 'Created Date',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-created-date-column-container',
        isSortableColumn: true,
        sortingFieldName: 'created_at'
      },
      {
        field: 'startupName',
        columnHeader: 'Startup Name',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-name-column-container',
        isSortableColumn: false
      },
      {
        field: 'contactNo',
        columnHeader: 'Contact Number',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-contact-number-column-container',
        isSortableColumn: false
      },
      {
        field: 'email',
        columnHeader: 'Email',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-email-column-container',
        isSortableColumn: false
      },
      {
        field: 'stage',
        columnHeader: 'Stage',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-stage-column-container',
        isSortableColumn: false
      },
      {
        field: 'industry',
        columnHeader: 'Industry',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'startup-idea-list-industry-column-container',
        isSortableColumn: false
      }
    ]
  }

  getTablePaginationConfig(): TablePaginationConfig {
    const tablePaginationConfig: TablePaginationConfig = new TablePaginationConfig();
    tablePaginationConfig.pageSize = 25;
    tablePaginationConfig.pageSizeOptions = ['10', '25', '50', '100'];
    tablePaginationConfig.hidePageSize = false;
    return tablePaginationConfig;
  }

  startupIdeaStageInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredStartupIdeaStageOptions = this.startupIdeaStageOptions.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  startupIdeaStageFieldCloseHandler(stageInputElement: HTMLInputElement) {
    if (stageInputElement) {
      const searchedString = stageInputElement.value ? stageInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.startupIdeaStageOptions.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('stage', matchedValue, this.filterForm);
      stageInputElement.blur();
    }
  }

  startupIdeaIndustryInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredStartupIdeaIndustryOptions = this.startupIdeaIndustryOptions.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  startupIdeaIndustryFieldCloseHandler(industryInputElement: HTMLInputElement) {
    if (industryInputElement) {
      const searchedString = industryInputElement.value ? industryInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.startupIdeaIndustryOptions.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('industry', matchedValue, this.filterForm);
      industryInputElement.blur();
    }
  }

  resetClickHandler() {
    this.filterForm.reset();
    this.refreshTableData();
  }

  filterClickHandler() {
    this.refreshTableData();
  }

  refreshTableData() {
    if (this.orderTable) {
      this.orderTable.loadTableData();
    }
  }

  rowClickHandler(rowData: StartupIdeaListGetModel) {
    alert("add startup idea's form component in disable form control mode with selected data.");
  }

}
