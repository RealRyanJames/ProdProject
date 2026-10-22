enum Option {
  Java_Home,
  TypeScript,
  GoLang,
  JavaScript,
  Initialzed,
}

export class Options {
  private option: Option = Option.Initialzed;

  constructor(options: Option) {
    this.option = options;
  }

  public GetOption(): Option {
    return this.option;
  }
}

export namespace PickedOptions {
  function InitProd<T, E>(isOwned: T, Option: Option) {
    if (String(Option).startsWith("Java_Home")) {
      console.log("You Created " + Option);
    }

    if (String(Option).startsWith("GoLang")) {
      console.log("You Created " + Option);
    }

    if (String(Option).startsWith("TypeScript")) {
      console.log("You Created " + Option);
    }

    if (String(Option).startsWith("JavaScript")) {
      console.log("You Created " + Option);
    }
  }
}
