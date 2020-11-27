import React from 'react';
import {IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="md" className="header">
        <IonToolbar>
          <IonTitle color="primary">Viestit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
      <IonItemGroup className="ion-margin-top" >
        <IonItemDivider color="primary" className="ion-padding">
          <IonLabel>Saapuneet:</IonLabel>
        </IonItemDivider>
        <IonItem>
          <IonLabel>Angola</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Argentina</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Armenia</IonLabel>
        </IonItem>
      </IonItemGroup>

      <IonItemGroup className="ion-margin-top" >
        <IonItemDivider color="success" className="ion-padding">
          <IonLabel >Luetut:</IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>Bangladesh</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Belarus</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Belgium</IonLabel>
        </IonItem>
      </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
