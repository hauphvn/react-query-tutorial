import './App.css'
import {QueryClientProvider, QueryClient} from "react-query";
import { Link, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "../src/components/Home";
import ReduxPost from "../src/components/ReduxPost";
import ReactQueryPost from "../src/components/ReactQueryPost";
import {ReactQueryDevtools} from "react-query/devtools";
import { useEffect, useState } from "react";
function App() {
const location = useLocation();
const [isHome, setIsHome] = useState(true);
useEffect(() => {
  console.log(11,location.pathname)
  console.log(22,location?.pathname === ('/home' || '/' || ''))
  const homePath = location?.pathname;
  if(homePath === ('/home') || homePath === ('/')){
    setIsHome(true);
  }else{
    setIsHome(false);
  }
},[location.pathname]);
const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          {!isHome && (
            <div className={'header'}>
              <Link to={'/'}>Go home</Link>
              <hr/>
            </div>
          )}
        </header>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path={'home'} element={<Home/>}/>
          <Route path={'redux-post'} element={<ReduxPost/>}/>
          <Route path={'react-query-post'} element={<ReactQueryPost/>}/>
          <Route path="*" element={<p>There's nothing here: 404!</p>}/>
        </Routes>
        {/*<Route element={<Layout/>}>*/}
        {/*</Route>*/}
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>

  )
}

export default App
