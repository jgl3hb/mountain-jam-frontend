import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <p className="animate__animated animate__fadeInDown" id='quote'>
      “Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.” - John Muir
      </p>
    <div className={styles.alllinks}>
      <p className="animate__animated animate__fadeInDown " id={styles.linkone}>
      <a className={styles.links} href="https://www.muchbetteradventures.com/magazine/highest-mountains-in-the-world-top-10/" rel='noreferrer' target="_blank">Highest mountains in the world </a></p>
      <p className="animate__animated animate__fadeInDown " id={styles.linktwo}>
      <a className={styles.links} href="https://www.14ers.com/" rel='noreferrer' target="_blank">Home of all Colorado
      <br /> 14ers
      </a></p>
      <p className="animate__animated animate__fadeInDown " id={styles.linkthree}>
        <a className={styles.links} href="https://www.thephotoargus.com/most-famous-mountains-in-the-world-to-photograph/" rel='noreferrer' target="_blank">Most famous mountains in the world </a></p>
    </div>
    </main>
  )
}

export default Landing
