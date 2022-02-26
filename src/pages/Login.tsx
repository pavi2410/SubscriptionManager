import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, } from "@ionic/react";
import { useState } from "react";
import { useHistory, } from "react-router";

export default function Login() {
  const history = useHistory()
  
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
        <div className="mt-40 mx-11" style={{padding: '1rem'}}>
          <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          <IonInput value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          <IonButton expand="block" onClick={() => history.replace('/home')}>Login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}