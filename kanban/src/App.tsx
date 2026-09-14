import { Board } from './components/Board'
import { sampleBoard } from './fixtures/sampleBoard'

function App() {
  return (
    <main className="min-h-svh bg-slate-50 p-6 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Kanban
        </h1>
        <Board board={sampleBoard} />
      </div>
    </main>
  )
}

export default App
