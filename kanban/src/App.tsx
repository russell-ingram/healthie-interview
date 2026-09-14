import { Board } from './components/Board'
import { useItems } from './hooks/useItems'

function App() {
  const { items, setItemStatus, reorderItem } = useItems()

  return (
    <main className="min-h-svh bg-slate-50 p-6 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Kanban
        </h1>
        <Board
          items={items}
          onStatusChange={setItemStatus}
          onReorder={reorderItem}
        />
      </div>
    </main>
  )
}

export default App
