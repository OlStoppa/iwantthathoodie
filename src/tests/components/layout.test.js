import React from 'react'
import { StaticQuery } from 'gatsby'
import {render} from '@testing-library/react'
import Context from '../../context/cartContext'
import Layout from '../../components/layout'


  beforeEach(() => {
      StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            "site": {
              "siteMetadata": {
                "title": "this-hoodie"
              }
            }
          }))
  })

  test('layout renders correctly with children',() => {
      const {container, getByText} = render(
        <Context.Provider value={[[]]}>
            <Layout>
                <div>hoodie test</div>
            </Layout>
        </Context.Provider>)
      expect(container).toMatchSnapshot()
      expect(getByText('hoodie test')).toBeInTheDocument()
      
  })