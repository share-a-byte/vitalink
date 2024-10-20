import firestore from '@react-native-firebase/firestore';

interface Symptom {
    id: string;
    name: string;
  }

  export const addSymptomToFirestore = async (userId: string, symptom: Symptom) => {
    try {
      await firestore()
        .collection('users')
        .doc(userId)
        .collection('symptoms')
        .add({
          id: symptom.id,
          name: symptom.name,
        });
      console.log('Symptom added to Firestore:', symptom.name);
    } catch (error) {
      console.error('Error adding symptom to Firestore: ', error);
    }
  };