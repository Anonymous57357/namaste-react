## FINDING THE PATH

## useEffect hook -> ALWAYS CALLED EVERY COMPONENT RENDERED

useEffect(() => {}, [])

THEY ARE 3 POSSIBLE CASES

if no dependency array => useEffect called in every render
if dependency array is button => useEffect is called on inital at (once)
if dependency name is [button], is called everytime btn is reactied

const [state, setState] = useState()
where should we use and not ?

# it is uesd to create a local state varible inside the functional Components

# never use useState() hook inside the if condition (inconsistency)

# what is config

# react router is a another javascript library.created by remix

# react-dom-router have createBrowserRouter to create a routerand Componet is used to render the browser

# link is a super power given by react-router-dom (not refresing the whole compnent)
instead reloading the whole page react-router-dom refreshing the components

# why react single page application ?

when we in the first page .. for routing tradionally anchor tag is used for navaigation its reloaded and redirect to another page. 
but in react everything in the single page .. by using react-router-dom while routing react just change the components just refreshed or replace by another coponents

# 2 types of routing
1. Client Side Routing - react-router-dom
2. Server Side Routing req call made server send the request 

# link tag is used by react-router-dom
behind the scenes Link tag uses the anchor tag <a>
so Link tag is used for optimization for no page loading only coponent exchanging   