import React, {useState} from 'react';
import  {Switch, Route, HashRouter} from "react-router-dom";
import './App.css';

//Displayed components
import Home from './components/Home';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import MeetTheTeam from './components/ExecutiveTeam';
import OurMembers from './components/OurMembers';
import Volunteer from './components/Volunteer';
import BlogPosts from './components/Blog';
import Demo4 from './components/Gallery';
import Footer from './components/Footer';
import ProjectArise from './components/ProjectArise';
import ProjectBtG from './components/ProjectBtG';
import ProjectERC from './components/ProjectERC';
import ProjectSP2017 from './components/ProjectSP2017';
import ProjectASRP2019 from './components/ProjectASRP2019';
import ProjectChristmas from "./components/ProjectChris";
import PartnersSponsors from "./components/partners-sponsors";
import GalleryAkaeze from "./components/GalleryAkaeze"
import GalleryJeida from "./components/GalleryJeida"
import GalleryChristmas from "./components/GalleryChristmas"
import GalleryTutorial from "./components/GalleryTutorial"
import GalleryLibrary from "./components/GalleryLibrary"
import GalleryCareer from "./components/GalleryCareer"

import DonateParent from './components/DonateParent';

import SideDrawer from './components/SideDrawer/SideDrawer.js';
import CareerEnrichmentProgram from './components/CareerEnrichment';



const App = () => {

  const [state, setState] = useState({sideDrawerOpen: false})  

  let drawerToggleClickHandler = () => {
    setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  let closeBackDropClickHandler = () => {
    setState({sideDrawerOpen: false})
  }
  
  let sideDrawer;

  if(state.sideDrawerOpen){
    sideDrawer = <SideDrawer closeDrawer={closeBackDropClickHandler}/>
  }
  
  
  return (
    <div style={{height: "100%"}}>
      
      <HashRouter>
        <Switch>
          <Route 
            path='/home' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/who-we-are' 
            render = {(props)=> <WhoWeAre {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/project-arise' 
            render = {(props)=> <ProjectArise {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-BtG' 
            render = {(props)=> <ProjectBtG {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINERC' 
            render = {(props)=> <ProjectERC {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINSP2017' 
            render = {(props)=> <ProjectSP2017 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Akaeze-Summer-Program' 
            render = {(props)=> <ProjectASRP2019 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/career-enrichment-program' 
            render = {(props)=> <CareerEnrichmentProgram {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route
            path="/projects/Christmas-Benevolence-Project"
            render={(props) => (
              <ProjectChristmas
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          />
          <Route 
            path='/gallery/Akaeze-Summer-Program' 
            exact
            render = {(props)=> <GalleryAkaeze {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Jeida-Clinic' 
            exact
            render = {(props)=> <GalleryJeida {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/library' 
            exact
            render = {(props)=> <GalleryLibrary {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Christmas' 
            exact
            render = {(props)=> <GalleryChristmas {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/gallery/Tutorial' 
            exact
            render = {(props)=> <GalleryTutorial {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
         <Route 
            path='/gallery/career' 
            exact
            render = {(props)=> <GalleryCareer {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/projects' 
            render = {(props)=> <Projects {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/executiveboard' 
            render = {(props)=> <MeetTheTeam {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
            exact
          />
          <Route 
            path='/ourmembers' 
            render = {(props)=> <OurMembers {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/beavolunteer' 
            render = {(props)=> <Volunteer {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/blog' 
            render = {(props)=> <BlogPosts {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/gallery' 
            render = {(props)=> <Demo4 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/donate' 
            render = {(props)=> <DonateParent {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route
            path="/partners-sponsors"
            render={(props) => (
              <PartnersSponsors
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          /> 
          <Route path='/' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;