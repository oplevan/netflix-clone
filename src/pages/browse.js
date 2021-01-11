import React from 'react';
import { useContent } from '../hooks';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  // pull the series and films
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
