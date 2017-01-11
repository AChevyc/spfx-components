declare interface ISearchComponentStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'searchComponentStrings' {
  const strings: ISearchComponentStrings;
  export = strings;
}
