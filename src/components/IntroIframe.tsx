// use client = forcer le rendu côté client, import pour les hooks react
'use client'
import { useEffect, useState } from 'react'

// bloquer l'animation à juste une fois toutes les 30 mns. 
// storage_key = nom de la clé dans le local storage, à modif quand mise en prod(?)
const COOLDOWN_MS = 30 * 60 * 1000 // 30 minutes
const STORAGE_KEY = 'synapsee:introSeenAt'

// init visible qu'une seule fois pour éviter de lire local storage à chaque fois
export default function IntroIframe() {
  // (fix hydratation) on ne décide pas côté SSR : on part sur false puis on calcule après montage
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const [decided, setDecided] = useState(false)

  // décide si on doit afficher l'intro après montage (évite le mismatch SSR/CSR)
  useEffect(() => {
    const last = Number(localStorage.getItem(STORAGE_KEY) || 0)
    const shouldShow = Date.now() - last > COOLDOWN_MS
    if (shouldShow) setVisible(true)
    setDecided(true)
  }, [])

  // écoute du post message + enregistrement de l'heure dans le local storage (pour le cooldown)
  // puis visible -> false pour la disparition de l'anim
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
  if (!decided) {
    return <div className="fixed inset-0" style={{ zIndex: 2147483647, background: '#000' }} aria-hidden />
  }

  // ne rien rendre si pas visible (si l'anim vient d'être close ou cooldown actif)
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
