import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";



export class UserRepository {

  private collection: CollectionReference;

  constructor() {
    this.collection = getFirestore().collection("users")
  }


  async getAll(): Promise<User[]> {
    const snapshot = await this.collection.get();

    return snapshot.docs.map(doc => {

      return {
        id: doc.id,
        ...doc.data()
      }
    }) as User[];

  }
  async GetById(id: string): Promise<User | null> {
    const doc = await this.collection.doc(id).get()

    if (doc.exists) {
      return {

        id: doc.id,
        ...doc.data()

      } as User

    } else {
      return null;
    }
  }


  async save(user: User): Promise<void> {
    delete user.password
    await this.collection.add(user);
  }

  async update(user: User) {
    let docRef = this.collection.doc(user.id)

    await docRef.set({
      nome: user.nome,
      email: user.email
    })

  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete()
}


}