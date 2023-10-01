import React from 'react';
import { useMatches } from 'react-router-dom';

const BreadCrumnbs = () => {
  const matches = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match: any) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match: any) => match.handle.crumb(match.data));

    console.log('matches:', matches)
    console.log('crumbs:', crumbs)
  return (
    <ol>
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  );
};

export default BreadCrumnbs;
