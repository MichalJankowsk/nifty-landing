import Image from 'next/image'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './GetStarted.module.scss'
import Para from 'components/para'

const GetStarted = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <div className={stl.card}>
        <h2>Check out the hottest Sale offers</h2>

        <div className={stl.content}></div>

        <Button label="Show me More" variant="secondary" />
      </div>

      <div className={clsx(stl.card, stl.black)}>
        <Image src="/assets/png/hand.png" width={468} height={664} />

        <div className={stl.textBox}>
          <h2>Get started creating & selling your NFTs</h2>
          <Para size="small">
            Start your NFT journey today - create and sell your unique digital
            assets with ease!
          </Para>
        </div>

        <Button label="Get Started" />
      </div>

      <div className={stl.card}>
        <h2>Top NFT at a lower price</h2>

        <div className={stl.content}></div>

        <Button label="Show me More" variant="secondary" />
      </div>
    </div>
  )
}

export default GetStarted
