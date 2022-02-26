import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonIcon, IonLabel, IonTabButton, IonBadge } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { calendar, personCircle, map, informationCircle, home, analytics, apps } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Splash from './pages/Splash';
import { useEffect, useState, useMemo } from 'react';
import Account from './pages/Account';
import Stats from './pages/Stats';

setupIonicReact();

export default function App() {
  const showSplash = useMemo(() => {
    let s = localStorage.getItem('showSplash')
    return s === null || s !== "false"
  }, [])

  if (showSplash) {
    return <Splash />
  }

  return (
    <IonApp >
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/marketplace">
              <Marketplace />
            </Route>
            <Route exact path="/stats">
              <Stats />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/splash">
              <Splash />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
              {/* <IonBadge>6</IonBadge> */}
            </IonTabButton>

            <IonTabButton tab="marketplace" href="/marketplace">
              <IonIcon icon={apps} />
              <IonLabel>Marketplace</IonLabel>
            </IonTabButton>

            <IonTabButton tab="stats" href="/stats">
              <IonIcon icon={analytics} />
              <IonLabel>Stats</IonLabel>
            </IonTabButton>

            <IonTabButton tab="account" href="/account">
              <IonIcon icon={personCircle} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}
