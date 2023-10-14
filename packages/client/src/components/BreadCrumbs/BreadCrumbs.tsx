import React, { useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';

const StyledBreadCrumbs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledBreadCrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const BreadCrumnbs = () => {
  const matches = useMatches();
  const crumbs = useMemo(
    () =>
      matches
        .filter((match: any) => Boolean(match.handle?.crumb))
        .map((match: any) => match.handle.crumb(match.data)),
    [matches]
  );

  return (
    <StyledBreadCrumbs>
      {crumbs.map((crumb, index) => (
        <StyledBreadCrumb key={index}>
          <p>{'>'}</p>
          <p>{crumb}</p>
        </StyledBreadCrumb>
      ))}
    </StyledBreadCrumbs>
  );
};

export default BreadCrumnbs;
