import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers } from "./officers/OfficerProvider.js"
OfficerList()
getOfficers()

import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"

CriminalList()
getCriminals()

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
ConvictionSelect()


