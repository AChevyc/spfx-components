import * as React from 'react';
import * as pnp from 'sp-pnp-js';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { SearchBox, List, Button } from 'office-ui-fabric-react';
import { ISearchComponentProps } from './ISearchComponentProps';

export default class SearchComponent extends React.Component<ISearchComponentProps, void> {
  constructor(context: IWebPartContext) {
    super(context);

  }
  public search(): Promise<pnp.SearchResults> {
    let SearchQuery: pnp.SearchQuery = {
      Querytext: '*'
    };
    return pnp.sp.search(SearchQuery);
  }
  public clickToSearch(): void {
    this.search()
      .then(response => this.resolveSearchResponse.bind(this));
  }

  public resolveSearchResponse(response: pnp.SearchResults): void {
    console.log(response);
  }

  public render(): React.ReactElement<ISearchComponentProps> {
    let { clickToSearch } = this
    return (
      <div>
        <div>
          <SearchBox></SearchBox>
          <List
            items={[]}
            onRenderCell={(item, index) => {
              return (
                <div className='ms-ListBasicExample-itemCell' data-is-focusable={true}>
                  <div className='ms-ListBasicExample-itemContent'>
                    <div className='ms-ListBasicExample-itemName ms-font-xl'>{item.name} {index}</div>
                    <div className='ms-ListBasicExample-itemDesc ms-font-s'>{item.description} {index}</div>
                  </div>
                </div>
              );
            } }
            />
          <Button onClick={clickToSearch.bind(this)}>Search</Button>
        </div>
      </div>
    );
  }
}
