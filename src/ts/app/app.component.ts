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
                    <label for="phone-number-input">Phone Number:</label>
                    <input type="text" id="phone-number-input" name="phoneNumberInput" 
                        pattern="^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$" 
                        required [(ngModel)]="phoneNumber">
                    <span>Phone Number is invalid.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public phoneNumber: string = "";

}
