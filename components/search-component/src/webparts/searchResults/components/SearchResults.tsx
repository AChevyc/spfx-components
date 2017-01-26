import * as React from 'react';
import { css, List } from 'office-ui-fabric-react';
import styles from './SearchResults.module.scss';
import { ISearchResultsProps } from './ISearchResultsProps';

export default class SearchResults extends React.Component<ISearchResultsProps, any> {
  constructor() {
    super();
  }
  public render(): React.ReactElement<ISearchResultsProps> {
    let { items } = this.props;
    return (
      <section>
        <List items={items}>

        </List>
      </section>
    );
  }
}
