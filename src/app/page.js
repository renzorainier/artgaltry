import Image from 'next/image.js'
import Script from 'next/script'
import App from "@/components/Try"
import Animate from "@/components/Animate"

export default function Home() {
  return (
    <main>
      <div>
          <App/>
          <Animate duration={1} delay={0.2}>
        This is an animated card!
      </Animate>
      </div>
    </main>
  )
}
