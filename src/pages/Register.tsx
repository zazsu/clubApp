import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {IonPage, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react';
import {registerUser, loginUser} from '../firebaseConfig'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  async function register() {
    if ( password !== cpassword)
    {
      return
    } 
    const res = await registerUser(email.trim(), password);
      if(res) {
        const response: any =  await loginUser(email.trim(), password);
        if(response) {
          dispatch(setUserState(response.user));
          history.replace('/tapahtumat')
        }
      }
    }
    
  return (
    <IonPage>
      <IonHeader mode="md">
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className ="ion-padding ion-text-center">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput type="password" onIonChange={(e: any) => setCpassword(e.target.value)}></IonInput>
          </IonItem>
          <IonButton className="ion-margin" expand="block" onClick={register}>Register</IonButton>
            <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
}

export default Register;