import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'searchComponentStrings';
import SearchComponent from './components/SearchComponent';
import { ISearchComponentProps } from './components/ISearchComponentProps';
import { ISearchComponentWebPartProps } from './ISearchComponentWebPartProps';

export default class SearchComponentWebPart extends BaseClientSideWebPart<ISearchComponentWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISearchComponentProps > = React.createElement(
      SearchComponent
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
