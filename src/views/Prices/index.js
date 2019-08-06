import React from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import useGridColumns from '../../hooks/useGridColumns'
import PriceList from '../../loadables/PriceList'
import Button from '../../components/Button'
import Typography from '../../components/Typography'

const Nav = styled.section`
  display: flex;
  align-items: center;
`

const NavLinks = styled.nav`
  flex: 1;
  margin: ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(4)}px;
  & > *:not(:last-child) {
    margin-right: ${props => props.theme.spacing(2)}px;
  }
`

function Prices({ match }) {
  const [gridColumns, ref] = useGridColumns()
  const viewAllPath = `${match.url}/view-all`
  const paginatedPath = `${match.url}/paginated`
  return (
    <>
      <Nav>
        <Typography variant="h4">Price List</Typography>
        <NavLinks>
          <Button component={Link} to={viewAllPath} size="small">
            View All
          </Button>
          <Button component={Link} to={paginatedPath} size="small">
            Paginated
          </Button>
        </NavLinks>
      </Nav>
      <Switch>
        <Route exact path={viewAllPath} component={PriceList} />
        <Route
          exact
          path={paginatedPath}
          render={() => <PriceList ref={ref} itemsPerRow={gridColumns} />}
        />
        <Redirect exact from={match.url} to={viewAllPath} />
      </Switch>
    </>
  )
}

export default Prices
