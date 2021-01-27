import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"

OfficerList()
getOfficers()
CriminalList()
getCriminals()
ConvictionSelect()
OfficerSelect()

