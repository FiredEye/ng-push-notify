import { Injectable } from '@angular/core';
import { messaging, db } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { getToken} from "firebase/messaging";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor( private router: Router) { }

  async requestnotifyPermission(){
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      alert('notification permission granted.')
      console.log('Notification permission granted.');
      // alert("permission granted from global service")
      return true;
    } else {
      // alert("permission denied from global service")
      alert('notification permission denied.')
      return false;
    }
  }
  async requestAndSendToken(){
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {      
      const localToken = localStorage.getItem("token");

      // If 'localToken' is present, return from the function
      if (localToken) {
        console.log("Token already generated");
        return;
      }

      // Generate a new one and set it in localStorage
      const newUid = uuidv4();

      try {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey:
            "BOEIwKmhzOtilrPFggR2PA2laWtE0Zjj2YH2XlBISv8KMCAoen9fP30j-6FGozJ5MqcKDg_CqBIEPN0C5sFmrT0",
        });
        localStorage.setItem("token", token);

        console.log("Token Gen", token);

        // Save this token to server (db)
        await setDoc(doc(collection(db, "devices"), newUid), {
          uid: newUid,
          deviceToken: token,
        });
        this.router.navigate(['/about']);
        console.log("Token stored successfully");

        // // Delete Token
        // await deleteToken(messaging);
        // console.log("Token unsubscribed successfully");
      } catch (error) {
        console.error("Error generating or unsubscribing token:", error);
      }
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }
}
