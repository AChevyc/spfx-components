declare interface ISearchBarStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'searchBarStrings' {
  const strings: ISearchBarStrings;
  export = strings;
}
