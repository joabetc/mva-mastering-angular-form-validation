import { Component } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <div [formGroup]="formGroup">
            <label for="message-input">Message:</label>
            <input type="text" id="message-input" formControlName="messageControl">
            <span *ngIf="formGroup.controls.messageControl.invalid && formGroup.controls.messageControl.touched">
                Please enter a message.
            </span>
        </div>
    `,
})
export class AppComponent {

    public message: string = "";

    public formGroup = new FormGroup({
        messageControl: new FormControl("", Validators.required)
    });

}
