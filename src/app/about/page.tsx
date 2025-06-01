import Image from "next/image";
import meImage from './me.jpg';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={meImage} alt="Heorhii Savostikov photo" loading="eager" />

      <div className={''}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum
        similique dolor, sed laudantium a nihil perspiciatis blanditiis natus
        doloremque voluptates tenetur magni modi iusto quasi aspernatur cumque
        dolore suscipit dolores est impedit inventore asperiores. Molestiae
        dolor expedita dolores omnis laboriosam quisquam voluptatibus voluptas?
        Optio fugit voluptate facilis nisi veniam.
      </div>
    </article>
  );
}
