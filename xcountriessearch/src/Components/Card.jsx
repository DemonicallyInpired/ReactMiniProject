import styles from "../styles/styles.module.css";
export default function Card({ name, image }) {
  return (
    <div className={`${styles.countryCard} countryCard`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
