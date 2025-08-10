document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("noteInput");
  const saveBtn = document.getElementById("saveBtn");
  const clearBtn = document.getElementById("clearBtn");
  const notesList = document.getElementById("notesList");

  loadNotes();

  saveBtn.addEventListener("click", () => {
    const note = noteInput.value.trim();
    if (note) {
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
      noteInput.value = "";
      displayNotes(notes);
    }
  });

  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("notes");
    displayNotes([]);
  });

  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    displayNotes(notes);
  }

  function displayNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      const li = document.createElement("li");

      const noteText = document.createElement("span");
      noteText.textContent = note;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", () => {
        li.classList.add("fade-out");
        setTimeout(() => {
          let storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
          storedNotes.splice(index, 1);
          localStorage.setItem("notes", JSON.stringify(storedNotes));
          displayNotes(storedNotes);
        }, 300);
      });

      li.appendChild(noteText);
      li.appendChild(deleteBtn);

      notesList.appendChild(li);
    });
  }
});
