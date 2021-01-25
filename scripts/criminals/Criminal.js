export const Criminal = (criminalObj) => {
    return`
    <div class="criminal">
      <h4 class=criminalName>  ${criminalObj.name}</h4>
      <p class=criminalName> Age: ${criminalObj.age}</p>
      <p class=criminalName> Crime: ${criminalObj.conviction}</p>
      <p class=criminalName> Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
      <p class=criminalName> Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
`
}