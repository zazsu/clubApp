import React from 'react';
import { IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel,IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Bills: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="md">
        <IonToolbar>
          <IonTitle color="primary">Laskut</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">

      <IonItemGroup className="ion-margin-top" >
        <IonItemDivider color="primary" className="ion-padding">
          <IonLabel>Uudet:</IonLabel>
        </IonItemDivider>
        <IonItem>
          <IonLabel>Lisenssi maksu 2020</IonLabel>
        </IonItem>

      </IonItemGroup>
      <IonItemGroup className="ion-margin-top" >
        <IonItemDivider color="success" className="ion-padding">
          <IonLabel >Maksetut:</IonLabel>
        </IonItemDivider>
        <IonItem>
          <IonLabel>Kk-sopimus marraskuu 2020</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Kk-sopimus lokakuu 2020</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Kk-sopimus syyskuu 2020</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Ottelu passi</IonLabel>
        </IonItem>
      </IonItemGroup>

      </IonContent>
    </IonPage>
  );
};

export default Bills;
