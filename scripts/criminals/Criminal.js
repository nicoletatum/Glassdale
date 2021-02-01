// Add ShowAssociates button to Criminal Card - (needs import)
import { ShowAlibiButton } from "../Alibi/ShowAlibiButton.js"
// Use the Criminal’s ID in the ID property of the button 

export const Criminal = (criminalObj) => {
    return`
    <div class="criminal">
      <h3 class=criminalName>  ${criminalObj.name}</h3>
      <p class=criminaAge> Age: ${criminalObj.age}</p>
      <p class=criminalCrime> Crime: ${criminalObj.conviction}</p>
      <p class=criminalTermStart> Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
      <p class=criminalTermEnd> Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
      ${ShowAlibiButton(criminalObj)}
      </div>
`
}