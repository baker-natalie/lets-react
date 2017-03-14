'use strict';

import React from 'react';
import PagePreview from './PagePreview';
import pages from '../data/pages';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="page-selector">
          {pages.map(pageData => <PagePreview key={pageData.id} {...pageData} />)}
        </div>
      </div>
    );
  }
}
