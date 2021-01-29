import { NoteForm } from "./notes/NoteForm.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers } from "./officers/OfficerProvider.js"

NoteForm()
CriminalList()
getCriminals()
ConvictionSelect()
OfficerSelect()
OfficerList()
getOfficers()
