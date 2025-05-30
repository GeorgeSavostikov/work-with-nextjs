import course from "./course.json";

export default function Home() {
  return (
    <main>
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.name}>
            <h2>{lesson.title}</h2>

            <p>{lesson.shortSummary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
