import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "input.ng-invalid.ng-touched { border: 2px solid red; margin: 5px; }",
        "input + span { display: none; }",
        "input.ng-invalid.ng-touched + span { display: inline; }",
    ],
    template: `
        <form>
            <fieldset ngModelGroup="someGroup">
                <input type="text" id="message-input" name="messageInput" required [(ngModel)]="message">
                <span>Message id required.</span>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
