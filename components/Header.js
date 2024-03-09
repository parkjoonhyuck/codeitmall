import Link from 'next/link';
import styles from './Header.module.css';
import Container from './Container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link className={styles.logo} href="/">
          CodietMall
        </Link>
        <Link className={styles.setting} href="/setting">
          Setting
        </Link>
      </Container>
    </header>
  );
}
