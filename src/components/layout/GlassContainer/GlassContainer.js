import styles from './GlassContainer.module.scss';

const GlassContainer = ({ children, className, ...otherProps}) => {
  return (
      <div className={`${styles.container} ${className ? className : ''}`} {...otherProps}>{children}</div>
  )
}
export default GlassContainer