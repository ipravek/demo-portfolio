import styles from "@/styles/Project.module.css";
import { img1, img2, img3 } from "@/assets/images";

const Project = () => {
  let projects = [
    {
      id: 1,
      name: "Project 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?",
      image: img1,
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?",
      image: img2,
    },
    {
      id: 3,
      name: "Project 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem assumenda harum ut ipsum commodi odit sed delectus, error porro?",
      image: img3,
    },
  ];

  return (
    <>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.singleProject}>
          {projects.map((e) => (
            <>
              <div className={styles.singleProject}>
                <div className={styles.projectContainer}>
                  <div className={styles.items}>
                    <div className={styles.holder}>
                      <img src={e.image.src} alt="img" />
                    </div>
                  </div>
                  <div className={styles.items}>
                    <div className={styles.holder}>
                      <div>
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
