import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonItem, IonLabel, IonListHeader,
IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add, arrowForwardCircle } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subscription Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          <IonListHeader>
            <IonLabel>Your Subscriptions</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Netflix</IonLabel>
            <IonLabel color="red" slot="end" >2 days left</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Amazon Prime</IonLabel>
            <IonLabel slot="end" color="success">20 days left</IonLabel>
          </IonItem>
          <IonItem >
            <IonLabel>Sony Liv</IonLabel>
            <IonLabel slot="end" color="success">15 days left</IonLabel>
          </IonItem>
          <IonItem color="danger">
            <IonLabel>Voot</IonLabel>
            <IonLabel slot="end" >Expired</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hotstar</IonLabel>
            <IonLabel slot="end" color="success">11 days left</IonLabel>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
