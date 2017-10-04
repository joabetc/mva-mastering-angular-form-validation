import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "input.ng-invalid.ng-touched { border: 2px solid red; margin: 5px; }",
        "input + span { display: none; }",
        "input.ng-invalid + span { display: inline; }",
    ],
    template: `
        <form>
            <fieldset #g="ngModelGroup" ngModelGroup="someGroup">
                <div>
                    <label for="make-reqd">Make Required:</label>
                    <input type="checkbox" id="make-reqd" [(ngModel)]="makeRequired" required name="makeRequiredInput">
                    <span>Make required is required.</span>
                </div>
                <div>
                    <label for="message-input">Message:</label>
                    <input type="text" id="message-input" name="messageInput" 
                        [required]="makeRequired" [(ngModel)]="message">
                    <span>Message is required.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
