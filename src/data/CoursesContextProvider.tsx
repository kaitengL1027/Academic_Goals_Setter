import React, { useState } from 'react';

import CoursesContext, { Course, Goal } from './courses-context';

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 'c1', 
      title: 'React - The Complete Guide', 
      enrolled: new Date(),
      goals: [], 
      included: true
    }
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(), 
      title, 
      enrolled: date, 
      goals: [], 
      included: true
    };
    setCourses(prev => prev.concat(newCourse));
  };

  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text
    };
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses];
      const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
      const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses];
      const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
      const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.filter(goal => goal.id !== goalId);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses];
      const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
      const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.slice(); //.slice() returns a copy of the array
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(goal => goal.id === goalId);
      const updatedGoal = { ...updatedCourseGoals[updatedCourseGoalIndex], text: newText };
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses];
      const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex], included: isIncluded };
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  return <CoursesContext.Provider value={{courses, addGoal, addCourse, deleteGoal, updateGoal, changeCourseFilter}} >{props.children}</CoursesContext.Provider>;
};

export default CoursesContextProvider;