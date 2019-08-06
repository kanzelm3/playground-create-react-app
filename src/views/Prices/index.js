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
  flex-wrap: wrap;
  white-space: nowrap;
`

const NavLinks = styled.nav`
  flex: 1;
  margin: ${props => props.theme.spacing(2)}px 0;
  & > *:not(:last-child) {
    margin-right: ${props => props.theme.spacing(2)}px;
  }
`

const Title = styled(Typography)`
  margin-right: ${props => props.theme.spacing(4)}px;
`

function Prices({ match }) {
  const [gridColumns, ref] = useGridColumns()
  const viewAllPath = `${match.url}/view-all`
  const paginatedPath = `${match.url}/paginated`
  return (
    <>
      <Nav>
        <Title variant="h4">Price List</Title>
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
