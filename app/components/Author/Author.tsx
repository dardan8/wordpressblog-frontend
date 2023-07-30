import styles from "./Author.module.scss";
import Image from "next/image";

type AuthorProps = {
  imageURL: string;
  authorName: string;
};

const Author = ({ imageURL, authorName }: AuthorProps) => {
  return (
    <div className={styles.author_section}>
      <Image src={imageURL} width={35} height={35} alt={`${authorName}`} />
      <p>{authorName}</p>
    </div>
  );
};

export default Author;
