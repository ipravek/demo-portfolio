import styles from "@/styles/Work.module.css";
import uuid from "react-uuid";

const Work = () => {
  const workDetails = [
    {
      name: "Company #1",
      duration: "DEC 2021 - AUG 2033",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quisquam ratione tenetur, voluptatibus pariatur ducimus. Dolorem facere vitae ea.",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      name: "Company #1",
      duration: "DEC 2021 - AUG 2033",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quisquam ratione tenetur, voluptatibus pariatur ducimus. Dolorem facere vitae ea.",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      name: "Company #1",
      duration: "DEC 2021 - AUG 2033",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quisquam ratione tenetur, voluptatibus pariatur ducimus. Dolorem facere vitae ea.",
      tags: ["HTML", "CSS", "JS"],
    },
  ];

  return (
    <>
      <h2 className={styles.h2}>Work</h2>
      <div className={styles.work}>
        <div className={styles.company}>
          {workDetails.map((e) => (
            <div className={styles.companyCard} key={uuid()}>
              <div className={styles.firstHalf} key={uuid()}>
                <div className={styles.cName} key={uuid()}>
                  {e.name}
                </div>
                <div className={styles.duration} key={uuid()}>
                  {e.duration}
                </div>
              </div>
              <div className={styles.secondHalf} key={uuid()}>
                <div className={styles.description} key={uuid()}>
                  {e.description}
                </div>
                <div className={styles.tags} key={uuid()}>
                  {e.tags.map((e) => (
                    <p key={uuid()}>{e}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
