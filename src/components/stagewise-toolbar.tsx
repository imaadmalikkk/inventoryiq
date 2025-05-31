"use client"

import dynamic from 'next/dynamic'

const StagewiseToolbar = dynamic(
  () => import('@stagewise/toolbar-next').then((mod) => mod.StagewiseToolbar),
  { ssr: false, loading: () => null }
)

const stagewiseConfig = {
  plugins: []
}

export function StageWiseDevTools() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div id="stagewise-root">
      <StagewiseToolbar config={stagewiseConfig} />
    </div>
  )
} 