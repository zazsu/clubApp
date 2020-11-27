import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { personOutline, homeOutline, mailOutline, receiptOutline } from 'ionicons/icons';

import Tab1 from './pages/Events';
import Tab2 from './pages/Bills';
import Tab3 from './pages/Messages';
import Tab4 from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

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
import { getCurrentUser } from './firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import {setUserState} from './redux/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if(user) {
        dispatch(setUserState(user));
       window.history.replaceState({},'', '/') 
      } else {
       window.history.replaceState({},'', '/login')  
      }
    })
  }, [])
    return (
      <IonApp>
        <IonReactRouter> 
          <IonTabs >   
            <IonRouterOutlet>      
              <Route path="/tapahtumat" component={Tab1} exact={true} />
              <Route path="/laskut" component={Tab2} exact={true} />
              <Route path="/viestit" component={Tab3} />
              <Route path="/profiili" component={Tab4} />
              <Route path="/" render={() => <Redirect to="/tapahtumat" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar mode="md" slot="bottom">
              <IonTabButton tab="tab1" href="/tapahtumat">
                <IonIcon icon={homeOutline} />
                <IonLabel>Tapahtumat</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/laskut">
                <IonIcon icon={receiptOutline} />
                <IonLabel>Laskut</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/viestit">
                <IonIcon icon={mailOutline} />
                <IonLabel>Viestit</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/profiili">
                <IonIcon icon={personOutline} />
                <IonLabel>Profiili</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </IonReactRouter>
      </IonApp>
      );
}

export default App;
