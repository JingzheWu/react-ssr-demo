import React, { useState } from 'react';
import { Button } from '@/components/Button';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ color: 'red' }}>{count}</p>
      <div className={styles.btnWrapper}>
        <Button
          text="Increment"
          className={styles.btn}
          onClick={() => setCount(count + 1)}
        />
        <Button
          text="Decrement"
          className={styles.btn}
          onClick={() => setCount(count - 1)}
        />
        <Button
          text="Reset"
          className={styles.btn}
          onClick={() => setCount(0)}
        />
      </div>
    </div>
  );
};
