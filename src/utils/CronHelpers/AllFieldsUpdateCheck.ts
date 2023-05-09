/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';

export async function updateFieldsCompletedForAllClientsParallel() {
  console.log('Updating fieldsCompleted for all clients');
  const clientsQuery = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients');
  console.log('Getting all clients', JSON.stringify(clientsQuery, null, 2));

  const clientsSnapshot = await clientsQuery.get();
  console.log(`Updating fieldsCompleted for ${clientsSnapshot.size} clients`);
  const batchPromises: any[] = [];
  clientsSnapshot.forEach(async (doc) => {
    const fields = doc.data();
    console.log(`${JSON.stringify(fields, null, 2)}\n`);
    // ignoring "bio" as not all clients have it
    const { username, location, age, gender, subscriptionStatus } =
      fields || {};
    console.log(username, location, age, gender, subscriptionStatus);
    if (username && location && age && gender && subscriptionStatus) {
      console.log(`Updating fieldsCompleted for ${fields?.username}`);
      batchPromises.push(doc.ref.update({ fieldsCompleted: true }));
    } else {
      batchPromises.push(doc.ref.update({ fieldsCompleted: false }));
    }
  });
  await Promise.all(batchPromises);
  return batchPromises;
}
