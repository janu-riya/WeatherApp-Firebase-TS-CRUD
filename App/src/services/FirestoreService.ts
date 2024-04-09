// src/services/FirestoreService.ts
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { WeatherModel } from '../models/WeatherModel';

const serviceAccount = require('./config.json');

const app = firebase.initializeApp(serviceAccount);
const db = getFirestore(app);

export class FirestoreService {
  private readonly collectionName = 'weather';

  constructor(private readonly firestore: any) {}

  async addWeather(location: string, data: WeatherModel): Promise<void> {
    try {
      const weatherDocRef = doc(this.firestore, this.collectionName, location);
      await setDoc(weatherDocRef, data);
      console.log("Weather data saved for location:", location);
    } catch (error) {
      console.error("Error adding weather data:", error);
      throw error;
    }
  }

  async getWeather(location: string): Promise<WeatherModel | null> {
    try {
      const weatherDocRef = doc(this.firestore, this.collectionName, location);
      const docSnap = await getDoc(weatherDocRef);
      if (docSnap.exists()) {
        return { ...docSnap.data() as WeatherModel };
      } else {
        console.log("No weather data found for location:", location);
        return null;
      }
    } catch (error) {
      console.error("Error getting weather data:", error);
      throw error;
    }
  }

  async updateWeather(location: string, data: Partial<WeatherModel>): Promise<void> {
    try {
      const weatherDocRef = doc(this.firestore, this.collectionName, location);
      await updateDoc(weatherDocRef, data);
      console.log("Weather data updated for location:", location);
    } catch (error) {
      console.error("Error updating weather data:", error);
      throw error;
    }
  }

  async deleteWeather(location: string): Promise<void> {
    try {
      const weatherDocRef = doc(this.firestore, this.collectionName, location);
      await deleteDoc(weatherDocRef);
      console.log("Weather data deleted for location:", location);
    } catch (error) {
      console.error("Error deleting weather data:", error);
      throw error;
    }
  }
}

const firestoreService = new FirestoreService(db);
export default firestoreService;
