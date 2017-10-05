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
                    <label for="email-address-input">Email Address:</label>
                    <input type="email" id="email-address-input" name="emailAddressInput" 
                        email required [(ngModel)]="emailAddress">
                    <span>Email Address is invalid.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public phoneNumber: string = "";

}
