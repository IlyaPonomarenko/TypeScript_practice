console.log("PMApp in TS begins...");

function autobind(
    target:any,
    methodName: string,
    descriptor: PropertyDescriptor,
){
    const originalmethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn = originalmethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
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
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
  private configure(){
    this.element.addEventListener("submit",this.submitHandler.bind(this))
  }
  private submitHandler(event: Event){
    event.preventDefault();
    console.log(this.titleInputElement.value)
  }
}
const prjInput = new projectInput();
