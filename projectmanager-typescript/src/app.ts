console.log("PMApp in TS begins...");
interface Validator {
  value: string | number;
  required?: boolean;
  minLength: number;
  maxLength: number;
  min?: number;
  max?: number;
}

function validate(validateInput: Validator) {
  let isValid = true;
  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string"
  ) {
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

function autobind(_: any, descriptor: PropertyDescriptor) {
  const originalmethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalmethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class ProjectList{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    
    constructor(private type:"active" | "finished"){
        this.templateElement = document.getElementById("project-list")! as  HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;
        const importedNode = document.importNode(
            this.templateElement.content,
            true
          );
          this.element = importedNode.firstElementChild as HTMLElement;
          this.element.id = `${this.type}-projects`;
          this.attach();
          this.renderContent()
    }
    private renderContent(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul")!.id = listId;
        this.element.querySelector("h2")!.textContent =
        this.type.toUpperCase() + "PROJECTS";
    }
    private attach(){
        this.hostElement.insertAdjacentElement("beforeend", this.element)
    }
}
class projectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
    this.configure();

    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
  }
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;
    const titleValidate: Validator = {
      value: enteredTitle,
      required: true,
      minLength: 0,
      maxLength: 0,
    };
    const descriptionValidate: Validator = {
      value: enteredDescription,
      minLength: 5,
      required: true,
      maxLength: 0,
    };
    const peopleValidate: Validator = {
      value: enteredPeople,
      max: 5,
      min: 1,
      required: true,
      minLength: 0,
      maxLength: 0,
    };
    if (
      !validate(titleValidate) ||
      !validate(descriptionValidate) ||
      !validate(peopleValidate)
    ) {
      alert("invalid input");
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
  private submitHandler(event: Event) {
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
