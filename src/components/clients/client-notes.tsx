import * as React from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from "date-fns"

interface Note {
  id: string
  content: string
  createdAt: Date
}

interface ClientNotesProps {
  notes: Note[]
  onAddNote: (content: string) => void
}

export function ClientNotes({ notes, onAddNote }: ClientNotesProps) {
  const [newNote, setNewNote] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newNote.trim()) {
      onAddNote(newNote.trim())
      setNewNote("")
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Notes</h3>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Textarea
            placeholder="Add a note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={!newNote.trim()}>
            Add Note
          </Button>
        </form>
      </div>

      <ScrollArea className="h-[300px] rounded-md border p-4">
        {notes.length > 0 ? (
          <div className="space-y-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="rounded-lg border p-4 text-sm"
              >
                <p className="whitespace-pre-wrap">{note.content}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {formatDistanceToNow(note.createdAt, { addSuffix: true })}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            No notes yet.
          </p>
        )}
      </ScrollArea>
    </div>
  )
} 