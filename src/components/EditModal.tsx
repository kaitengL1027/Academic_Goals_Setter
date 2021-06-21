import React, { useRef, useState } from "react";
import {
  IonModal,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
} from "@ionic/react";
import { text } from "ionicons/icons";

const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  editedGoal: { id: string; text: string } | null;
  onSave: (goalText: string) => void;
}> = (props) => {
  const [error, setError] = useState("");
  const textRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredText = textRef.current!.value;

    if (!enteredText || enteredText.toString().trim().length === 0) {
      setError("Please give it a valid title");
      return;
    }
    props.onSave(enteredText.toString());
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.editedGoal ? "Edit" : "Add"} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Goal</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedGoal?.text}
                  ref={textRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow>
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" color="dark" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
