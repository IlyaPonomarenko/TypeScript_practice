"use strict";
console.log("PMApp in TS begins...");
function validate(validateInput) {
    let isValid = true;
    if (validateInput.required) {
        isValid = isValid && validateInput.value.toString().trim().length !== 0;
    }
    if (validateInput.minLength != null &&
        typeof validateInput.value === "string") {
        isValid && validateInput.value.length >= validateInput.minLength;
    }
    if (validateInput.maxLength != null &&
        typeof validateInput.value === "string") {
        isValid && validateInput.value.length >= validateInput.maxLength;
    }
    if (validateInput.min != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value >= validateInput.min;
    }
    if (validateInput.max != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value >= validateInput.max;
    }
    return isValid;
}
function autobind(_, descriptor) {
    const originalmethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalmethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class projectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
        this.configure();
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.peopleInputElement = this.element.querySelector("#people");
        this.descriptionInputElement = this.element.querySelector("#description");
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidate = {
            value: enteredTitle,
            required: true,
            minLength: 0,
            maxLength: 0,
        };
        const descriptionValidate = {
            value: enteredDescription,
            minLength: 5,
            required: true,
            maxLength: 0,
        };
        const peopleValidate = {
            value: enteredPeople,
            max: 5,
            min: 1,
            required: true,
            minLength: 0,
            maxLength: 0,
        };
        if (!validate(titleValidate) ||
            !validate(descriptionValidate) ||
            !validate(peopleValidate)) {
            alert("invalid input");
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInputs();
        }
    }
}
const prjInput = new projectInput();
