// use client = forcer le rendu côté client, import pour les hooks react
// use client = force the render on the client side, import for react's hooks
'use client'
import { useEffect, useState } from 'react'

// bloquer l'animation à juste une fois toutes les 30 mns.
// block the animation to once all 30' minutes

// storage_key = nom de la clé dans le local storage, à modif quand mise en prod(?)
// ' ' = name of each user key in the local storage (gonna be modified when put in production)
const COOLDOWN_MS = 30 * 60 * 1000 // 30 minutes
const STORAGE_KEY = 'synapsee:introSeenAt'

// init visible qu'une seule fois pour éviter de lire local storage à chaque fois
// init visible only once to avoid to read the local storage every time
export default function IntroIframe() {
  // (fix hydratation) on ne décide pas côté SSR : on part sur false puis on calcule après montage
  //  ' ' we don't decide of the SSR side : we start from false then we calculate after 
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const [decided, setDecided] = useState(false)

  // décide si on doit afficher l'intro après montage (pr éviter le mismatch SSR/CSR)
  // decide if we show the intro after setting up
  useEffect(() => {
    const last = Number(localStorage.getItem(STORAGE_KEY) || 0)
    const shouldShow = Date.now() - last > COOLDOWN_MS
    if (shouldShow) setVisible(true)
    setDecided(true)
  }, [])

  // écoute du post message + enregistrement de l'heure dans le local storage (pour le cooldown)
  //  listen the post message + record of the hour the user connect from their local storage

  // puis visible -> false pour la disparition de l'anim
  //  then visible -> false switch for the animation to desappear
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e?.data?.type === 'intro:done') {
        setFading(true)
        setTimeout(() => {
          localStorage.setItem(STORAGE_KEY, String(Date.now()))
          setVisible(false)
        }, 700)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // fermer l'Iframe au bout de 8 scds
  //  close the Iframe after 8 seconds
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, String(Date.now()))
        setVisible(false)
      }, 700)
    }, 8000)
    return () => clearTimeout(t)
  }, [visible])

  // voile noir ultra-tôt tant qu'on n'a pas décidé (empêche le flash avant le calcul client)
  // put a dark mask before we do the calculation on the client's side
  if (!decided) {
    return <div className="fixed inset-0" style={{ zIndex: 2147483647, background: '#000' }} aria-hidden />
  }

  // ne rien rendre si pas visible (si l'anim vient d'être close ou cooldown actif)
  // don't show any render if animation just closed down or if the animation is still active
  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      style={{ zIndex: 2147483647, background: '#000' }}
      aria-hidden
    >
      <iframe
        src="/intro/index.html"
        className="w-full h-full border-0 block"
      />
    </div>
  )
}
