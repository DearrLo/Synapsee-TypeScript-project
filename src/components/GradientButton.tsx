import { ReactNode } from "react"
import Link from "next/link"

type GradientButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
}

export default function GradientButton({ children, href, onClick }: GradientButtonProps) {
  const button = (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden 
                 font-semibold text-white transition-all duration-300 rounded-xl group 
                 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 
                 shadow-lg shadow-blue-500/20 hover:shadow-indigo-500/30"
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 w-full h-full bg-white opacity-10 blur-sm 
                   transition-all duration-300 group-hover:opacity-20"
      ></div>
    </button>
  )

  // si href fournit, alors transfo en btn cliquable
  // if href is given then put a button whom can be ckliked
  return href ? <Link href={href}>{button}</Link> : button
}
