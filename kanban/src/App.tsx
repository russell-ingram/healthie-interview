import { Board } from './components/Board'
import { NewItemForm } from './components/NewItemForm'
import { useItems } from './hooks/useItems'

function App() {
  const { items, addItem, setItemStatus, reorderItem } = useItems()

  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Kanban
        </h1>
        <NewItemForm onAdd={addItem} />
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
