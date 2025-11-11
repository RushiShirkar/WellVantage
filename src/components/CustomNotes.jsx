import { useState, useEffect } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { formatDate } from "../utils/dateUtils";

function CustomNotes({ notes = [], onNotesChange, readOnly = false }) {
  const [localNotes, setLocalNotes] = useState(notes);

  useEffect(() => {
    setLocalNotes(notes);
  }, [notes]);

  const handleAddNote = () => {
    const today = new Date().toISOString().split("T")[0];
    const newNote = {
      id: Date.now(),
      date: today,
      content: "",
      isSystemNote: false,
    };
    const updatedNotes = [newNote, ...localNotes];
    setLocalNotes(updatedNotes);
    if (onNotesChange) {
      onNotesChange(updatedNotes);
    }
  };

  const handleDateChange = (noteId, newDate) => {
    const updatedNotes = localNotes.map((note) =>
      note.id === noteId ? { ...note, date: newDate } : note
    );
    setLocalNotes(updatedNotes);
    if (onNotesChange) {
      onNotesChange(updatedNotes);
    }
  };

  const handleContentChange = (noteId, newContent) => {
    const updatedNotes = localNotes.map((note) =>
      note.id === noteId ? { ...note, content: newContent } : note
    );
    setLocalNotes(updatedNotes);
    if (onNotesChange) {
      onNotesChange(updatedNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = localNotes.filter((note) => note.id !== noteId);
    setLocalNotes(updatedNotes);
    if (onNotesChange) {
      onNotesChange(updatedNotes);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Header with title and add button */}
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-lg font-semibold text-gray-800">
          Custom notes
        </h3>
        {!readOnly && (
          <Button
            type="button"
            onClick={handleAddNote}
            aria-label="Add note"
          >
            Add Note
          </Button>
        )}
      </div>

      {/* Notes list */}
      <div className="space-y-3">
        {localNotes.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            No notes yet. Click the + button to add a note.
          </p>
        ) : (
          localNotes.map((note) => {
            const isSystemNote = note.isSystemNote || false;
            const isEditable = !readOnly && !isSystemNote;

            return (
              <div key={note.id} className="flex items-start gap-3">
                {/* Date input */}
                <div className="flex-shrink-0 w-[200px]">
                  {isEditable ? (
                    <div className="space-y-0">
                      <Input
                        type="date"
                        value={note.date || ""}
                        onChange={(e) => handleDateChange(note.id, e.target.value)}
                        className="bg-gray-100"
                      />
                    </div>
                  ) : (
                    <div className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md h-[40px] flex items-center">
                      {formatDate(note.date)}
                    </div>
                  )}
                </div>

                {/* Note content input */}
                <div className="flex-1 flex items-start gap-2">
                  <div className="flex-1 space-y-0">
                    <Input
                      type="text"
                      value={note.content || ""}
                      onChange={(e) => handleContentChange(note.id, e.target.value)}
                      disabled={!isEditable}
                      placeholder={isEditable ? "Enter note..." : ""}
                      className={
                        isSystemNote
                          ? "bg-gray-100 border-gray-300 text-gray-600 cursor-not-allowed"
                          : ""
                      }
                    />
                  </div>
                  {isEditable && (
                    <div className="flex items-center pt-0">
                      <Button
                        type="button"
                        onClick={() => handleDeleteNote(note.id)}
                        variant="transparent"
                        size="sm"
                        className="text-red-500 hover:text-red-700 focus:outline-none whitespace-nowrap"
                        aria-label="Delete note"
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CustomNotes;