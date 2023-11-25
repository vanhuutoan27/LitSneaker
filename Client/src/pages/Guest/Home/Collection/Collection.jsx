import React from 'react';
import { Link } from 'react-router-dom';

import './Collection.scss';

function Collection() {
  return (
    <div className="collection-wrapper">
      <h2 className="primaryText content">All Collections</h2>
      <div class="collection-container content">
        <div class="collection collection-kids">
          <h3>Kid's Collection</h3>
          <Link to="/kids" class="btn">
            View Collection
          </Link>
        </div>
        <div className="collection collection-stack">
          <div class="collection collection-men">
            <h3>Men's Collection</h3>
            <Link to="/men" class="btn">
              View Collection
            </Link>
          </div>
          <div class="collection collection-women">
            <h3>Women's Collection</h3>
            <Link to="/women" class="btn">
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
