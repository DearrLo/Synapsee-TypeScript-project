'use client'
import { useEffect, useState } from 'react'

export default function IntroIframe() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e?.data?.type === 'intro:done') {
        setFading(true)
        setTimeout(() => setVisible(false), 700)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // fermer l'Iframe au bout de 8 scds
  useEffect(() => {
    const t = setTimeout(() => {
      if (visible) {
        setFading(true)
        setTimeout(() => setVisible(false), 700)
      }
    }, 8000)
    return () => clearTimeout(t)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden
    >
      <iframe
        src="/intro/index.html"
        className="w-full h-full border-0 block"
        scrolling="no"
      />
    </div>
  )
}
