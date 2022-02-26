import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonButton,
} from "@ionic/react";

export default function Stats() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Active Subscriptions</IonLabel>
            <IonLabel slot="end">5</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Total Subscriptions</IonLabel>
            <IonLabel slot="end">8</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Monthly Cost</IonLabel>
            <IonLabel slot="end">₹1,800</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Savings</IonLabel>
            <IonLabel slot="end" color="success">₹100</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Total Saved</IonLabel>
            <IonLabel slot="end" color="success">₹800</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Saving since</IonLabel>
            <IonLabel slot="end">26 Feb, 2022</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}