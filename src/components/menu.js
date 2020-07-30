import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { CleanUrl } from "../helpers/string-helpers"

const MenuQuery = graphql`
query {
    allWordpressWpMenuNavigation(sort: {order: ASC, fields: menu_order}) {
      edges {
        node {
          title
          object
          url
          menu_order
        }
      }
    }
  }  
`

const Nav = (props) => {
    const MenuItems = props.data.allWordpressWpMenuNavigation.edges;    
    return (
        <nav>
            <ul>
                {
                    MenuItems.map((MenuItem) => {
                        const cleanMenuUrl = CleanUrl(MenuItem.node.url);
                        return (
                            <li
                                className={`nav-item-${MenuItem.node.menu_order}`}
                                key={MenuItem.node.menu_order}
                            >
                                <Link to={cleanMenuUrl}>
                                    {MenuItem.node.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

// 7 navigation items can be fit
const Menu = (props) => {
    return (
        <StaticQuery
            query={MenuQuery}
            render={data => <Nav data={data} {...props} />}
        />
    )
}

export default Menu

