import { Component, Input } from '@angular/core';

import { NoteService } from '../note.service';

import { Note } from '../note-model';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {

  @Input()
  note: Note;

  constructor(private noteService: NoteService) { }

  addHeartToNote(val: number) {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, { hearts: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }
<<<<<<< HEAD

  dislike(val: number) {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, { dislike: val +1 });
=======
  
  addDislikeToNote(val: number) {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, { dislike: val + 1 });
>>>>>>> 7852f9914fc66f7d3090ca5df9642f2ac7314651
    } else {
      console.error('Note missing ID!');
    }
  }

<<<<<<< HEAD
 

=======
>>>>>>> 7852f9914fc66f7d3090ca5df9642f2ac7314651
  deleteNote(id: string) {
    this.noteService.deleteNote(id);
  }

}
