function isComplete(course: { name: string; lessons: string[] }) {
  return course.lessons.length >= 4 ? true : false;
}
