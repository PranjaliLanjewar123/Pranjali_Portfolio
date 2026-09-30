const notesContainer = document.getElementById("notes");

function addNote() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!title || !content) {
        alert("Please enter both title and content!");
        return;
    }

    const note = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleString(),
    };

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayNotes();
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.reverse().forEach((note) => {
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = `
          <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
          <h3>${note.title}</h3>
          <p>${note.content}</p>
          <small>${note.date}</small>
        `;
        notesContainer.appendChild(div);
    });
}

window.onload = displayNotes;