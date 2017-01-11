import * as React from 'react';
import { SearchBox, List } from 'office-ui-fabric-react';
import { ISearchComponentProps } from './ISearchComponentProps';
import * as pnp from 'sp-pnp-js';

pnp.setup({
  headers:{
    Accept:'application/json;odata=verbose'
  }
});

const mockItems: Array<Object> = [{ name: 'Name', description: 'description' }, { name: 'Name', description: 'description' }, { name: 'Name', description: 'description' }, { name: 'Name', description: 'description' }, { name: 'Name', description: 'description' }];

export default class SearchComponent extends React.Component<ISearchComponentProps, void> {
  public render(): React.ReactElement<ISearchComponentProps> {
    return (
      <div>
        <div>
          <SearchBox></SearchBox>
          <List
            items={mockItems}
            onRenderCell={(item, index) => {
              return (
                <div className='ms-ListBasicExample-itemCell' data-is-focusable={true}>
                  <div className='ms-ListBasicExample-itemContent'>
                    <div className='ms-ListBasicExample-itemName ms-font-xl'>{item.name}</div>
                    <div className='ms-ListBasicExample-itemDesc ms-font-s'>{item.description}</div>
                  </div>
                </div>
              );
            } }
            />
        </div>
      </div>
    );
  }
}
