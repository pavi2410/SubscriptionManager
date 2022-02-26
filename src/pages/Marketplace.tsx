import {
  IonChip,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, arrowForwardCircle, home } from "ionicons/icons";
import { apps, AppType } from "../data";

const Marketplace: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="grid gap-4 grid-cols-2 p-4">
          {
            apps.map((a, i) => (
              <Card key={i} app={a} />
            ))
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

function Card({ app }: { app: AppType }) {
  return (
    <div className="flex flex-col place-content-around items-center py-5 px-2 shadow-md rounded-xl bg-gray-100">
      <div>
        <img src={app.icon} height="50px" width="50px" alt="icon" />
      </div>

      <div>
        <div className="text font-bold">{app.name}</div>
      </div>
      <div className="flex">
        <IonChip color="primary">
          <div className="text">{app.price}</div>
        </IonChip>
        <IonChip color="success">
          <div>{app.val}</div>
        </IonChip>
      </div>
    </div>
  );
}

export default Marketplace;
