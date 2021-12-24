import Styles from "./social-icon.module.css";

interface ISocialIcon {
  name: string;
  size?: number;
}

const SocialIcon = ({ name, size = 32 }: ISocialIcon) => {
  return (
    <div className={Styles.wrapper} style={{ height: size, width: size }}>
      <img src={`assets/images/${name}.svg`} alt={name} />
    </div>
  );
};

export default SocialIcon;
