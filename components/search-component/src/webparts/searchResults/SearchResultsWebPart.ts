import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


import * as strings from 'searchResultsStrings';
import SearchResults from './components/SearchResults';
import { ISearchResultsProps } from './components/ISearchResultsProps';
import { ISearchResultsWebPartProps } from './ISearchResultsWebPartProps';

export default class SearchResultsWebPart extends BaseClientSideWebPart<ISearchResultsWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISearchResultsProps> = React.createElement(SearchResults,
      {
        items: []
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}