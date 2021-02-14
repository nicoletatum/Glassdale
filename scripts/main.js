import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { ShowWitnessButton } from "./witness/witnessButton.js"
// import { ShowAlibiButton } from "./notes/ShowNotesButton.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

import { OfficerSelect } from "./officers/OfficerSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import "./notes/NoteList.js"
import "./witness/witnessList.js"

NoteForm()
ShowNoteButton()
ShowWitnessButton()
// ShowAlibiButton()
CriminalList()
getCriminals()
ConvictionSelect()
OfficerSelect()
OfficerList()
getOfficers()
// witnessList()

