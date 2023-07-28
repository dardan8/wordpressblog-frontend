import styles from "./SubscribeContainer.module.scss";
import Button from "@/app/components/Button/Button";
const SubscribeContainer = () => {
  return (
    <div className={`${styles.subscribecontainer} container`}>
      <div className={styles.subscribe_wrapper}>
        <h1>Don't want to miss the latest recipes?</h1>
        <h3>Join our Newsletter</h3>
        <Button placeholder='Subscribe Now' />
      </div>
    </div>
  );
};

export default SubscribeContainer;
