import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Login
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInpu>
        <IonInput value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
      </IonContent>
    </IonPage>
  )
}