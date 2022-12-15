import { useSessionKey } from 'contexts'
import { Frame } from 'assets'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BillerRequestProps, getBiller } from 'services/api/billerApi'
import { IBiller, ICategory } from 'types'

type Props = {}

const BillPayment = (props: Props) => {
  const param = useParams()
  const [billerCode, setBillerCode] = useState(param.biller)
  const [biller, setBiller] = useState({} as IBiller)
  const { sessionKey } = useSessionKey()

  useEffect(() => {
    fetchBiller()
  }, [])

  const fetchBiller = async () => {
    const billerPromise = await getBiller({ sessionKey: sessionKey, billerCode } as BillerRequestProps)
    if (billerPromise) {
      setBiller(billerPromise)
    }
  }

  return (
    <div className="biller-container">
      <div className="biller-background"></div>
      <br/>
      <img src={Frame} alt="ICON" />
      <h2>{biller.billerName}</h2>
      <div className="biller-product-card">
        <h4>Select Amount</h4>
        <div className="biller-products">
          {
            ['1000MMK', '3000MMK', '5000MMK', '10000MMK', '20000MMK'].map((itm, i) => 
              <div key={i} className="biller-product-item">
                <span>1000MMK</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default BillPayment
