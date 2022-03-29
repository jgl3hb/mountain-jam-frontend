import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to Mountain Jam, {user ? user.name : 'climber'} !</h1>
      <p id='quote'>
      “Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.”
      </p>
    </main>
  )
}

export default Landing
