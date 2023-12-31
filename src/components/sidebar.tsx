import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Sidebar = styled.section`
  position: fixed;
  left: 0;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.second};
  color: ${colors.textMain};
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 1em 0 2em;
  padding: 0.5em 0;
  border-bottom: 0.05em solid ${colors.main50};
  postion: relative;
  color: ${colors.textBody};
  text-decoration: none;

  &:before {
    content: "";
    transition: 0.5s;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    left: 0.8em;
    border-radius: 50%;
    display: block;
    background-color: ${colors.main};
    transform: scale(0);
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query Sidebar {
        allContentfulArticle(sort: { order: ASC, fields: orderNumber }) {
          edges {
            node {
              title
              link
              orderNumber
            }
          }
        }
      }
    `}
    render={({ allContentfulArticle: { edges } }: Queries.SidebarQuery) => (
      <Sidebar>
        {edges.map(({ node: { title, link, orderNumber } }) => (
          <NavItem to={link!} key={link}>
            {orderNumber}. {title}
          </NavItem>
        ))}
      </Sidebar>
    )}
  />
);
