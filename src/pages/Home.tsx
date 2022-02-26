import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonItem, IonLabel, IonListHeader,
  IonFab, IonFabButton, IonIcon, IonThumbnail, IonImg
} from '@ionic/react';
import { add, arrowForwardCircle } from 'ionicons/icons';
import { apps } from '../data'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subscrypt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          <IonListHeader>
            <IonLabel>Your Subscriptions</IonLabel>
          </IonListHeader>

          {
            apps.map((a, i) => (
              <IonItem key={i}>
                <IonThumbnail slot="start" style={{'--ion-size': 'small'}}>
                  <IonImg src={a.icon} alt="icon" className=""/>
                </IonThumbnail>
                <IonLabel>{a.name}</IonLabel>
                <IonLabel color={a.dayleft > 7 ? 'success' : 'danger'} slot="end">{a.dayleft} days left</IonLabel>
              </IonItem>
            ))
          }
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
