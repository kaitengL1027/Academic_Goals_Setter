import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
} from "@ionic/react";
import React, { useContext } from "react";

import CoursesContext from '../data/courses-context';

const Filter: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);

  const filterChangeHandler = (event: CustomEvent) => {
    coursesCtx.changeCourseFilter(event.detail.value, event.detail.checked);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start">
            <IonMenuButton />
          </IonButton>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {coursesCtx.courses.map(course => (
            <IonItem key={course.id}>
              <IonLabel>
                {course.title}
              </IonLabel>
              <IonToggle checked={course.included} value={course.id} onIonChange={filterChangeHandler} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
