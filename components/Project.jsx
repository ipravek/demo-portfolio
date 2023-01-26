import styles from "@/styles/Project.module.css";
import { img1, img2, img3 } from "@/assets/images";
import uuid from "react-uuid";
import Image from "next/image";

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
            <div className={styles.singleProject} key={uuid()}>
              <div className={styles.projectContainer} key={uuid()}>
                <div className={styles.items} key={uuid()}>
                  <div className={styles.holder} key={uuid()}>
                    <Image src={e.image} alt="img" key={uuid()} />
                  </div>
                </div>
                <div className={styles.items} key={uuid()}>
                  <div className={styles.holder} key={uuid()}>
                    <div>
                      <h2 key={uuid()}>{e.name}</h2>
                      <p key={uuid()}>{e.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
