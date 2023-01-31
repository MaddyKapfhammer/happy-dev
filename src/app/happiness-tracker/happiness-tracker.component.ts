import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-happiness-tracker',
  templateUrl: './happiness-tracker.component.html',
  styleUrls: ['./happiness-tracker.component.css']
})
export class HappinessTrackerComponent {
 form = new FormGroup({
  productivity1: new FormControl('', Validators.required),
  productivity2: new FormControl('', Validators.required),
  productivity3: new FormControl('', Validators.required),
  productivity4: new FormControl('', Validators.required),
  productivity5: new FormControl('', Validators.required),
  satisfaction1: new FormControl('', Validators.required),
  satisfaction2: new FormControl('', Validators.required),
  satisfaction3: new FormControl('', Validators.required),
  satisfaction4: new FormControl('', Validators.required),
  satisfaction5: new FormControl('', Validators.required),
  satisfaction6: new FormControl('', Validators.required),
  relationship1: new FormControl('', Validators.required),
  relationship2: new FormControl('', Validators.required),
  relationship3: new FormControl('', Validators.required),
  relationship4: new FormControl('', Validators.required),
  relationship5: new FormControl('', Validators.required)
 });

 get f(){
  return this.form.controls;
 }

 calculateTimeValues(timeCategory: string | null | undefined){
  var timeValue: number = 0;

  if(timeCategory === "never" || timeCategory === 'stronglyAgree'){
    timeValue = 4;
  } else if(timeCategory === "rarely" || timeCategory === 'agree'){
    timeValue = 3;
  } else if(timeCategory === 'sometimes' || timeCategory === 'disagree'){
    timeValue = 2;
  } else if(timeCategory === 'frequently' || timeCategory ===  'stronglyDisagree'){
    timeValue = 1;
  } else {
    timeValue = 0;
  };

  return timeValue;
 }

 calculateRelationshipValues(timeCategory: string | null | undefined){
  var timeValue: number = 0;

  if(timeCategory === 'stronglyDisagree' || timeCategory === 'never'){
    timeValue = 1;
  } else if(timeCategory === 'disagree' || timeCategory === 'rarely'){
    timeValue = 2;
  } else if(timeCategory === 'agree' || timeCategory === 'sometimes'){
    timeValue = 3;
  } else if(timeCategory === 'stronglyAgree' || timeCategory === 'frequently'){
    timeValue = 4;
  } else{
    timeValue = 0;
  }

  return timeValue;
 }

 calculateProductivityScore(prod1: string | null | undefined, prod2: string | null | undefined, prod3: string | null | undefined, prod4: string | null | undefined, prod5: string | null | undefined){
  var prod1Value: number = 0;
  var prod2Value: number = 0;
  var prod3Value: number = 0;
  var prod4Value: number = 0;
  var prod5Value: number = 0;
  var sum: number = 0;

  prod1Value = this.calculateTimeValues(prod1);
  prod2Value = this.calculateTimeValues(prod2);
  prod3Value = this.calculateTimeValues(prod3);
  prod4Value = this.calculateTimeValues(prod4);
  prod5Value = this.calculateTimeValues(prod5);

  sum = prod1Value + prod2Value + prod3Value + prod4Value + prod5Value;

  return sum;
 }

 calculateSatisfactionScore(sas1: string | null | undefined, sas2: string | null | undefined, sas3: string | null | undefined, sas4: string |null | undefined, sas5: string | null | undefined, sas6: string | null | undefined){
  var sas1Value: number = 0;
  var sas2Value: number = 0;
  var sas3Value: number = 0;
  var sas4Value: number = 0;
  var sas5Value: number = 0;
  var sas6Value: number = 0;
  var sum: number = 0;

  sas1Value = this.calculateTimeValues(sas1);
  sas2Value = this.calculateTimeValues(sas2);
  sas3Value = this.calculateTimeValues(sas3);
  sas4Value = this.calculateTimeValues(sas4);
  sas5Value = this.calculateTimeValues(sas5);
  sas6Value = this.calculateTimeValues(sas6);

  sum = sas1Value + sas2Value + sas3Value + sas4Value + sas5Value + sas6Value;
  return sum;
 }

 calculateRelationshipScore(rel1: string | null | undefined, rel2: string | null | undefined, rel3: string | null | undefined, rel4: string | null | undefined, rel5: string | null | undefined){
  var rel1Value: number = 0;
  var rel2Value: number = 0;
  var rel3Value: number = 0;
  var rel4Value: number = 0;
  var rel5Value: number = 0;
  var sum: number = 0;

  rel1Value = this.calculateTimeValues(rel1);
  rel2Value = this.calculateTimeValues(rel2);
  rel3Value = this.calculateTimeValues(rel3);
  rel4Value = this.calculateTimeValues(rel4);
  rel5Value = this.calculateTimeValues(rel5);

  sum = rel1Value + rel2Value + rel3Value + rel4Value + rel5Value;
  return sum;
 }

 submit(){
  var productivityScore: number = 0;
  var satisfactionScore: number = 0;
  var relationshipScore: number = 0;
  var happinessScore: number = 0;

  productivityScore = this.calculateProductivityScore(this.form.value.productivity1, this.form.value.productivity2, this.form.value.productivity3, this.form.value.productivity4, this.form.value.productivity5);
  satisfactionScore = this.calculateSatisfactionScore(this.form.value.satisfaction1, this.form.value.satisfaction2, this.form.value.satisfaction3, this.form.value.satisfaction4, this.form.value.satisfaction5, this.form.value.satisfaction6);
  relationshipScore = this.calculateRelationshipScore(this.form.value.relationship1, this.form.value.relationship2, this.form.value.relationship3, this.form.value.relationship4, this.form.value.relationship5);
  happinessScore = Math.round((productivityScore + satisfactionScore + relationshipScore) / 3);

  console.log('Productivity Score:', productivityScore);
  console.log('Satisfaction Score:', satisfactionScore);
  console.log('Working Relationship Score:', relationshipScore);
  console.log('Overall Happiness Score:', happinessScore);

}
}
