import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { ShowWitnessButton } from "./witness/witnessButton.js"
import{ getWitnesses } from "./witness/witnessProvider.js"
import { ShowFacilitiesButton } from "./facility/facilitiesButton.js"

// import { ShowAlibiButton } from "./notes/ShowNotesButton.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

import { OfficerSelect } from "./officers/OfficerSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import "./notes/NoteList.js"
import { witnessList} from "./witness/witnessList.js"

NoteForm()
ShowNoteButton()
ShowWitnessButton()
ShowFacilitiesButton()
// ShowAlibiButton()
CriminalList()
getCriminals()
ConvictionSelect()
OfficerSelect()
OfficerList()
getOfficers()
witnessList()
getWitnesses()

