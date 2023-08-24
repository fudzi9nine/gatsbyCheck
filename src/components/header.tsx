import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Header = styled.header`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: 0.5em;
`;

const Logo = styled.img`
  border-radius: 50%;
  height: 100%;
`;

const LogoLink = styled(Link)`
  height: 100%;
  width: 40px;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query Header {
        allFile(filter: { name: { eq: "icon" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        edges: [
          {
            node: { publicURL },
          },
        ],
      },
    }: Queries.HeaderQuery) => (
      <Header>
        Gatsby app
        <LogoLink to="/">
          <Logo src={publicURL!} alt="logo" width="60px" height="60px" />
        </LogoLink>
      </Header>
    )}
  />
);
