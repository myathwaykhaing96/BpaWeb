import { Frame } from 'assets'
import { useSessionKey } from 'contexts'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { privateRoutePaths, publicRoutePaths } from 'routes'
import { BillersRequestProps, getBillers } from 'services/api/billerApi'
import { IBiller, ICategory } from 'types'

type Props = {}

const Home = (props: Props) => {
  const [billers, setBillers] = useState([] as Array<IBiller>)
  const [categories, setCategories] = useState([] as Array<ICategory>)
  const { sessionKey } = useSessionKey()

  useEffect(() => {
    fetchBiller()
  }, [])

  const fetchBiller = async () => {
    const billersPromise = await getBillers({ sessionKey: sessionKey } as BillersRequestProps)
    if (billersPromise) {
      setBillers(billersPromise)

      const uniqueIds: any[] = []
      const unique = billersPromise.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.categoryCode)
        if (!isDuplicate) {
          uniqueIds.push(element.categoryCode)
          return true
        }
        return false
      })

      setCategories(unique)
    }
  }

  return (
    <div>
      {categories.map((category) => (
        <div key={category.categoryCode} className="category">
          <NavLink to={`/bpa-web/${category.categoryCode}`}>
            <h4>{category.categoryName}</h4>
          </NavLink>
          <div className="billerList">
            {billers
              .filter((biller) => biller.categoryCode === category.categoryCode)
              .map((biller) => (
                <NavLink key={biller.billerCode} to={`/bpa-web/${category.categoryCode}/${biller?.billerCode}`}>
                  <div className="biller">
                    <img src={Frame} alt="ICON" />
                    {biller.billerName}
                  </div>
                </NavLink>
              ))}
            {billers.filter((biller) => biller.categoryCode === category.categoryCode).length <
              12 &&
              new Array(
                12 -
                  billers.filter((biller) => biller.categoryCode === category.categoryCode).length,
              )
                .fill(
                  undefined,
                  0,
                  12 -
                    billers.filter((biller) => biller.categoryCode === category.categoryCode)
                      .length,
                )
                .map((itm, i) => (
                  <div key={i} className="biller">
                    <img src={Frame} alt="ICON" />
                    {'Coming Soon'}
                  </div>
                ))}
          </div>
        </div>
      ))}

      {/* <p>Some example text..</p> */}
      {/* <h2>Scroll back up again to "remove" the sticky position.</h2> */}
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
        dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
        convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed
        ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
        Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas
        nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
        ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus
        pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
      </p> */}
    </div>
  )
}

export default Home
