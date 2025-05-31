
type LessonProps = {
  title: string;
  shortSummary?: string;
};

export const Lesson = ({ title, shortSummary }: LessonProps) => {
  return (
    <details>
      <summary>
        <h2>{title}</h2>
      </summary>

      <p>{shortSummary}</p>
    </details>
  )
};