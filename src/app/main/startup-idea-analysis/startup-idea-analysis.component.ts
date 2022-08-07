import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { FormStatus, getFormControlValue, setFormControlValue } from 'src/app/app-utils';
import { StartupIdeaAnalysisService } from 'src/app/service/api/startup-idea-analysis.service';
import { StartupIdeaDocsService } from 'src/app/service/api/startup-idea-docs.service';
import { StartupIdeaAnalysisPostModel } from 'src/app/service/models/startup-idea-analysis.model';
import { growlMessageType } from 'src/common-ui/growl/growl-constants';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { getStageOfStartupList, getStartupIndustryList } from '../main-constants';


@Component({
  selector: 'sevenx-startup-idea-analysis',
  templateUrl: './startup-idea-analysis.component.html',
  styleUrls: ['./startup-idea-analysis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartupIdeaAnalysisComponent implements OnInit {

  baseForm: FormGroup;

  startupIndustryList: string[] = getStartupIndustryList();

  stageOfStartupList: string[] = getStageOfStartupList();

  displayWithStartupIndustryFn = (industry: string) => industry || '';

  displayWithStartupStageFn = (stage: string) => stage || '';

  constructor(
    private formBuilder: FormBuilder,
    private StartupIdeaAnalysisService: StartupIdeaAnalysisService,
    private growlService: GrowlService,
    private startupIdeaDocsService: StartupIdeaDocsService
  ) {
    this.init();
  }

  ngOnInit(): void {
  }

  init() {
    this.initBaseForm();
  }

  initBaseForm() {
    this.baseForm = this.formBuilder.group({
      startupName: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      idea: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      stage: ['', Validators.required],
      remarks: [''],
      document: ['']
    });
  }

  startupIndustryFieldCloseHandler(screenNameInputElement: HTMLInputElement) {
    if (screenNameInputElement) {
      this.StartupIndustryFormControlValue(screenNameInputElement.value);
      screenNameInputElement.blur();
    }
  }

  StartupIndustryFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: string = null;
    if (searchedString) {
      matchedValue = this.startupIndustryList.find((stage: string) => {
        return stage && stage.toLowerCase() === searchedString;
      }) || null;
    }

    setFormControlValue('industry', matchedValue, this.baseForm);
  }

  startupIndustryInputChangeHandler(searchedValue: string) {
    this.startupIndustryList = getStartupIndustryList();
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.startupIndustryList = getStartupIndustryList().filter((stage: string) => {
      return stage && stage.toLowerCase().includes(searchedValue);
    });
  }


  submitClickHandler() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const postModel = new StartupIdeaAnalysisPostModel().toRemote(this.baseForm.getRawValue());

      const documents: any[] = getFormControlValue('document', this.baseForm);

      this.StartupIdeaAnalysisService.post(postModel)
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.status === 200) {
            if (documents && documents.length) {
              this.uploadDocument(response.data.id);
            } else {
              this.growlService.showGrowlMessage({
                message: 'We will get back to you soon.',
                messageType: growlMessageType.SUCCESS,
                messageTitle: 'Thank you!'
              });
              window.location.reload();
            }
          } else {
            this.growlService.errorMessageGrowl();
          }
        }, () => {
          this.growlService.errorMessageGrowl();
        });
    }
  }


  stageOfStartupFieldCloseHandler(inputElement: HTMLInputElement) {
    if (inputElement) {
      this.setStageOfStartupFormControlValue(inputElement.value);
      inputElement.blur();
    }
  }

  setStageOfStartupFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: string = null;
    if (searchedString) {
      matchedValue = this.stageOfStartupList.find((stage: string) => {
        return stage && stage.toLowerCase() === searchedString;
      }) || null;
    }
    setFormControlValue('stage', matchedValue, this.baseForm);
  }

  stageOfStartupInputChangeHandler(searchedValue: string) {
    this.stageOfStartupList = getStageOfStartupList();
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.stageOfStartupList = getStageOfStartupList().filter((stage: string) => {
      return stage && stage.toLowerCase().includes(searchedValue);
    });
  }

  onDocumentChange(event: any) {
    if (event && event.target && event.target.files && event.target.files.length) {
      const existingFiles = getFormControlValue('document', this.baseForm);
      if (existingFiles && existingFiles.length) {
        setFormControlValue('document', [...existingFiles, ...event.target.files], this.baseForm);
      } else {
        setFormControlValue('document', event.target.files, this.baseForm);
      }
    }
  }



  uploadDocument(startupDetailsId: number) {
    const documents = getFormControlValue('document', this.baseForm);
    const formData = new FormData();
    // const documentData = new FormData();
    for (let i = 0; i < documents.length; i++) {
      const oDocument = documents[i];
      formData.append("document", oDocument, oDocument.name);
    }
    formData.set("startupDetailsId", `${startupDetailsId}`);
    this.documentUploadRequest(formData);
  }

  documentUploadRequest(uploadDocumentPostModel): Promise<any> {
    return this.startupIdeaDocsService.post(uploadDocumentPostModel)
      .pipe(take(1))
      .toPromise()
      .then((response) => {
        if (response && response.data && response.status === 200) {
          this.growlService.showGrowlMessage({
            message: 'We will get back to you soon.',
            messageType: growlMessageType.SUCCESS,
            messageTitle: 'Thank you!'
          });

          window.location.reload();
        } else {
          this.growlService.errorMessageGrowl();
        }
      }, () => {
        this.growlService.errorMessageGrowl();
      });
  }

}
