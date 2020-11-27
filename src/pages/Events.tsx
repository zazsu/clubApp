import React, {useState} from 'react';
import {
  IonSearchbar, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonInput,
  IonLabel,
  IonItem,
  IonToggle, 
  IonRadio,
  IonCheckbox,
  IonRadioGroup,
  IonListHeader,
  IonItemDivider,
  IonModal,
  IonButton
} from '@ionic/react';

import Event from '../components/Event'

const testData = [
  {
    title: "Ottelu aikuiset",
    attending: false,
    allowed: 15,
    attendees: 2,
    time: "22.11 klo 16.30",
    description: "Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. "
  } ,
  {
    title: "Yleistreeni",
    attending: false,
    allowed: 15,
    attendees: 13,
    time: "29.11 klo 12.00",
    description: "Vivamus placerat lacus vel vehicula scelerisque, dui enim adipiscing lacus sit amet sagittis, libero enim vitae mi. "
  },
  {
    title: "Balance",
    attending: false,
    allowed: 10,
    attendees: 10,
    time: "1.12 klo 19.30",
    description: "Ut venenatis ipsum quis turpis. Integer cursus scelerisque lorem. Sed nec mauris id quam blandit consequat. Cras nibh mi hendrerit vitae, dapibus et aliquam et magna. Nulla vitae elit. Mauris consectetuer odio vitae augue. "
  },
  {
    title: "Yleistreeni",
    attending: false,
    allowed: 25,
    attendees: 10,
    time: "3.12 klo 18.00",
    description: "Ut venenatis ipsum quis turpis. Integer cursus scelerisque lorem. Sed nec mauris id quam blandit consequat. Cras nibh mi hendrerit vitae, dapibus et aliquam et magna. Nulla vitae elit. Mauris consectetuer odio vitae augue. "
  },
  {
    title: "Kick HIIT",
    attending: false,
    allowed: 15,
    attendees: 15,
    time: "12.12 klo 19.30",
    description: "Ut venenatis ipsum quis turpis. Integer cursus scelerisque lorem. Sed nec mauris id quam blandit consequat. Cras nibh mi hendrerit vitae, dapibus et aliquam et magna. Nulla vitae elit. Mauris consectetuer odio vitae augue. "
  },
  {

    title: "Yleistreeni",
    attending: false,
    allowed: 15,
    attendees: 13,
    time: "29.11 klo 12.00",
    description: "Vivamus placerat lacus vel vehicula scelerisque, dui enim adipiscing lacus sit amet sagittis, libero enim vitae mi. "
  } ]

const Events: React.FC = () => {


  return (
    <IonPage>
      <IonHeader mode="md">
        <IonToolbar>
          <IonTitle color="primary">Tapahtumat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle >Tulossa:</IonTitle>
        {testData.map(({ title, time, attending, description, attendees, allowed }, i) => (
          <div className="relative">
            <Event event={title} time={time} attending={attending} attendees={attendees} allowed={allowed} description={description}></Event>

          </div>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Events;
