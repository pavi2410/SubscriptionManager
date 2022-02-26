import {
  IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar,
  IonSlides, IonSlide
} from "@ionic/react";
import { useEffect } from "react";
import "./splash.css"

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export default function Splash() {
  useEffect(() => {
    localStorage.setItem('showSplash', 'false');
  }, [])
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="slide">
              <img src={"/assets/undraw_app_wireframe.svg"} alt="img" />
              <h2>Hassle-free subscription management</h2>
              <p>
                The <b>Subscrypt app</b> is a one-stop solution for your digital subscription needs.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide">
              <img src={"/assets/undraw_online_payments.svg"} alt="img" />
              <h2>Get Renewal Reminders</h2>
              <p>
                Never forget renewing your subscriptions ever again. We will remind you 7 days in advance.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide">
              <img src={"/assets/undraw_savings.svg"} alt="img" />
              <h2>Make Savings</h2>
              <p>
                Save money on your subscriptions. Our algorithm will automatically calculate what's best for you.
              </p>
              <IonButton expand="block" color="primary" className="px-2 mt-4" onClick={() => window.location.reload()}>Continue</IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}