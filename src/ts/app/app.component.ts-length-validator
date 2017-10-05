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
                    <label for="message-input">Message:</label>
                    <input type="text" id="message-input" name="messageInput" 
                        minlength="5" maxlength="10" required [(ngModel)]="message">
                    <span>Message is invalid.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
