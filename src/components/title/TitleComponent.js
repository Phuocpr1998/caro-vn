import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = props => {
  const defaultTitle = '⚛️ app';
  const { title } = props;
  return (
    <Helmet>
      <title>{title !== undefined ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
