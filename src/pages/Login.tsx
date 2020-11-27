import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IonPage, IonButton, IonLabel, IonItem, IonInput, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react';
import {loginUser} from '../firebaseConfig'
import { useDispatch } from 'react-redux'
import { setUserState } from '../redux/actions';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();

   async function login() {
    const res: any =  await loginUser(email.trim(), password);
    if(res) {
      dispatch(setUserState(res.user));
      history.replace('/tapahtumat')
    }
    console.log(`${res ? 'Login success' : 'Login failed'}`);
  } 

  return (
    <IonPage>
      <IonHeader mode="md">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonItem> 
          <IonLabel position='floating'>Email</IonLabel>     
          <IonInput onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
        </IonItem>
        <IonItem>    
        <IonLabel position='floating'>Password</IonLabel>      
          <IonInput type="password"  onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
        </IonItem> 
        <IonButton className="ion-margin" expand="block" onClick={login}>Login</IonButton>
        <p>Don't have an account yet? <Link to="/register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
}

export default Login;