

 // This variable calls the cNote audio element in the HTML.

var cNote = new Audio('media/c_note.mp3');
var dNote = new Audio('media/d_note.mp3');
var eNote = new Audio('media/e_note.mp3');
var fNote = new Audio('media/f_note.mp3');
var gNote = new Audio('media/g_note.mp3');
var aNote = new Audio('media/a_note.mp3');
var bNote = new Audio('media/b_note.mp3');
var c2Note = new Audio('media/c2_note.mp3');

// functions to play notes when div is clicked

function playC(note)
{
    // play audio file from start.
    cNote.currentTime = 0;
    // play note.
    cNote.play();
}

function playD()
{
    dNote.currentTime = 0;
    dNote.play();
}

function playE()
{
    eNote.currentTime = 0;
    eNote.play();
}

function playF()
{
    fNote.currentTime = 0;
    fNote.play();
}

function playG()
{
    gNote.currentTime = 0;
    gNote.play();
}

function playA()
{
    aNote.currentTime = 0;
    aNote.play();
}

function playB()
{
    bNote.currentTime = 0;
    bNote.play();
}

function playC2()
{
    c2Note.currentTime = 0;
    c2Note.play();
}

