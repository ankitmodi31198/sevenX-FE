import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { FormStatus, setFormControlValue } from 'src/app/app-utils';
import { FindACoFounderService } from 'src/app/service/api/find-a-co-founder.service';
import { FindACoFounderPostModel } from 'src/app/service/models/find-a-co-founder.model';
import { growlMessageType } from 'src/common-ui/growl/growl-constants';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { getSkillsList, getStageOfStartupList, getStartupIndustryList } from '../../main-constants';

@Component({
  selector: 'sevenx-find-a-co-founder-form',
  templateUrl: './find-a-co-founder-form.component.html',
  styleUrls: ['./find-a-co-founder-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FindACoFounderFormComponent implements OnInit {

  baseForm: FormGroup;

  stageOfStartupList: string[] = getStageOfStartupList();

  startupIndustryList: string[] = getStartupIndustryList();

  skillList: string[] = getSkillsList();

  displayWithStartupStageFn = (stage: string) => stage || '';

  displayWithStartupIndustryFn = (industry: string) => industry || '';

  constructor(
    private formBuilder: FormBuilder,
    private findACoFounderService: FindACoFounderService,
    private growlService: GrowlService
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
      startupYear: [''],
      stage: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      idea: ['', [Validators.required]],
      profileSkills: ['', [Validators.required]],
      remarks: ['']
    });
  }

  submitClickHandler() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const postModel = new FindACoFounderPostModel().toRemote(this.baseForm.getRawValue());

      this.findACoFounderService.post(postModel)
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.status === 200) {
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


  skillFieldCloseHandler(inputElement: HTMLInputElement) {
    if (inputElement) {
      this.skillFormControlValue(inputElement.value);
      inputElement.blur();
    }
  }

  skillFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: string = null;
    if (searchedString) {
      matchedValue = this.skillList.find((skill: string) => {
        return skill && skill.toLowerCase() === searchedString;
      }) || null;
    }
    setFormControlValue('profileSkills', matchedValue, this.baseForm);
  }

  skillInputChangeHandler(searchedValue: string) {
    this.skillList = getSkillsList();
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.skillList = getSkillsList().filter((skill: string) => {
      return skill && skill.toLowerCase().includes(searchedValue);
    });
  }

}
