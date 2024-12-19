## new concepts props

# javascript & React comparison

# In react functional component its same like javascript function. samle like in js orguments, in react js is called props

# passing a argument function is same like parssing a props to the functional component

# what is props ?

- when you pass some dynamic value inside react component using props
- when you pass some dynamic value inside function or any javsscipt expession using arguments

- reuable compnents props

# what is key prop ?

## for oprimiazation

{resList.map((restaurent) => (
<RestaurentCard resData={restaurent} />
))}

- its uniquely identifies which card to render if the absence of id react render all the cards in the list==> esacpe from rerendering

# why use index instead of id ?
- inthe official react development not recommended

# each element in the list have the unique key

## not using keys not acceptale <<<<<< use uniquekeys (index) <<<<<<<<<<<< useUniqueKeys (id) best practices

# swiggy

- swiggy follows config driven ui
- the ui is config by backend based on the data its shows to different regions or places
