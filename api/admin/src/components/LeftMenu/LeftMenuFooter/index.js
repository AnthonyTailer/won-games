/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {

  return (
    <Wrapper>
      <div className="poweredBy">
        <span>
          Powered by
        </span>
        &nbsp;
        <a
          href={`https://github.com/AnthonyTailer`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthony Tailer
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
