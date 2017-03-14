'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PageMenu from './PageMenu';
import pages from '../data/pages';

export default class PageView extends React.Component {
  render() {
    const id = this.props.params.id;
    const page = pages.filter((page) => page.id === id)[0];
    if (!page) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${page.bgImg})` };
    return (
      <div className="page-full">
        <PageMenu pagees={pages}/>
        <div className="page">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${page.bg-img}`}/>
            <h2 className="title">{page.title}</h2>
          </div>
          <section className="description">
            <p>{page.description}</p>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
