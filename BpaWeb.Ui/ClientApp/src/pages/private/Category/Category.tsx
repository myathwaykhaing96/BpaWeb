import { Frame } from 'assets'
import { useSessionKey } from 'contexts'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { BillersRequestProps, getBillers } from 'services/api/billerApi'
import { IBiller, ICategory } from 'types'
type Props = {}

const Category = (props: Props) => {
  const param = useParams()
  const [billers, setBillers] = useState([] as Array<IBiller>)
  const [categoryCode, setCategoryCode] = useState(param.category)
  const { sessionKey } = useSessionKey()

  useEffect(() => {
    fetchBiller()
  }, [])

  const fetchBiller = async () => {
    const billersPromise = await getBillers({ sessionKey: sessionKey } as BillersRequestProps)
    if (billersPromise) {
      setBillers(billersPromise)
    }
  }

  return (
    <div>
      <div className="category">
        <h4>{categoryCode}</h4>
        <div className="billerList">
          {billers
            .filter((biller) => biller.categoryCode === categoryCode)
            .map((biller) => (
              <NavLink key={biller.billerCode} to={`/bpa-web/${categoryCode}/${biller?.billerCode}`}>
                <div className="biller">
                  <img src={Frame} alt="ICON" />
                  {biller.billerName}
                </div>
              </NavLink>
            ))}
          {billers.filter((biller) => biller.categoryCode === categoryCode).length < 12 &&
            new Array(12 - billers.filter((biller) => biller.categoryCode === categoryCode).length)
              .fill(
                undefined,
                0,
                12 - billers.filter((biller) => biller.categoryCode === categoryCode).length,
              )
              .map((itm, i) => (
                <div key={i} className="biller">
                  <img src={Frame} alt="ICON" />
                  {'Coming Soon'}
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Category
