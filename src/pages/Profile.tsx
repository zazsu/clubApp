import React from 'react';
import { IonText, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';
import {logoutUser} from '../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const Profile: React.FC = () => {
  const history = useHistory();
  const email = useSelector((state: any) => state.user.email);
 
  async function logout () {
  await logoutUser();
  history.replace('/login')
  }

  const dispatch = useDispatch();
  return (
    <IonPage>
    <IonHeader mode="md" className="header">
      <IonToolbar>
        <IonTitle color="primary">Profiili</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonAvatar className="ion-align-self-center">
        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" />
      </IonAvatar>
      <IonText>
        <p>Kirjautuneena sähköpostilla</p>
        <p>{email}</p>
      </IonText>
    <IonButton expand="block" onClick={logout}>Kirjaudu ulos</IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Profile;
