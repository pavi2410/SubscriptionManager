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
import { apps } from "../data";
import { useHistory, } from "react-router";

const Account: React.FC = () => {
    const history = useHistory()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col items-center py-5 px-2">
          <IonAvatar className="h-32 w-32">
            <img
              src={
                "https://raw.githubusercontent.com/ionic-team/ionic-docs/main/static/demos/api/avatar/avatar.svg"
              }
              alt="icon"
            />
          </IonAvatar>
          <div>
            <h1 className="text-2xl font-bold">User</h1>
          </div>
        </div>

        <hr style={{ borderBottom: "1px solid black" }} className="my-1" />

        <IonList>
          <IonItem>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Saved Cards</IonLabel>
          </IonItem>
        </IonList>
        <IonButton color="danger" onClick={() => history.replace('/login')} expand="block" className="px-3 mt-4" >
          Sign Out
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Account;
