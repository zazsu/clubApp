import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonRippleEffect, IonModal } from '@ionic/react';
import React, {useState} from 'react';
import './Event.css'
import { checkmarkSharp, closeSharp, personSharp  } from 'ionicons/icons';

const Event: React.FC<{event: any, time: any, attending: any, attendees: any, allowed: any, description: any}> = ({event, time, attending, attendees, allowed, description}) => {
  const [isAttending, setAttending] = useState(attending);
  const [eAttendees, setAttendees] = useState(attendees);
  const [isFull, setIsFull] = useState(attendees === allowed)
  const [showModal, setShowModal] = useState(false);

  function setClasses() {
    if(isFull) {
      return "check ion-activatable ripple-parent disabled"
    } else if (isAttending){
      return "check ion-activatable ripple-parent attending"
    }else {
      return "check ion-activatable ripple-parent" 
    }
  }

  function toggleAttend() {
    if(isAttending){
      setAttending(false);
      setAttendees(eAttendees-1);
    } else{
      if(eAttendees === allowed){
          alert("Event is full")
          {return}
      }
      setAttending(true);
      setAttendees(eAttendees+1);
    }
  }

  return (
    <div className="event-wrapper ion-margin">
      <div className="title">{event}</div>
  <div className="attendees"><IonIcon icon={personSharp}/>{attendees}/{allowed}</div>
      <div className="date">{time}</div>
      <div onClick={toggleAttend} className={setClasses()}><IonIcon icon={isAttending ? closeSharp : checkmarkSharp}/><IonRippleEffect className="ripple"></IonRippleEffect> </div>
      <IonButton onClick={() => setShowModal(true)} fill="clear" className="details-button"></IonButton>

      <IonModal isOpen={showModal} cssClass='modal'>
        <h2>{event}</h2>
        <p>{time}</p>
        <p>osallistujia: {attendees}/{allowed}</p>
        <p>{description}</p>
        <div onClick={toggleAttend} className={setClasses()}> <IonIcon icon={isAttending ? closeSharp : checkmarkSharp}/><IonRippleEffect className="ripple"></IonRippleEffect> </div>
        <IonButton className="ion-margin-top" expand="full" onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
    </div>
  );
};

export default Event;

