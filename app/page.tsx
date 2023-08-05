import Image from 'next/image'
import { ModeToggle } from "../components/ui/dark-mode"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Mode Toggle</h1>
      <ModeToggle />
    </main>
  )
}
