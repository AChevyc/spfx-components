import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'searchBarStrings';
import SearchBar from './components/SearchBar';
import { ISearchBarProps } from './components/ISearchBarProps';
import { ISearchBarWebPartProps } from './ISearchBarWebPartProps';

export default class SearchBarWebPart extends BaseClientSideWebPart<ISearchBarWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISearchBarProps> = React.createElement(SearchBar);

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
