import { MonsterInfo } from '@/types/monsters.interface';
import { FC } from 'react';

import styles from './monster.module.css';
import Image from 'next/image';
import { baseUrl } from '@/constants';

export interface MonsterProps {
  monster: MonsterInfo;
}

export const Monster: FC<MonsterProps> = ({ monster }) => {
  const {
    charisma,
    constitution,
    dexterity,
    image,
    intelligence,
    name,
    strength,
    wisdom,
  } = monster;
  return (
    <div className={styles['monster']}>
      <h1 className={styles['monster__name']}>{name}</h1>
      <dl className={styles['monster__stats']}>
        <dt className={styles['monster__stat']}>Strength</dt>
        <dd className={styles['monster__stat-value']}>{strength}</dd>
        <dt className={styles['monster__stat']}>Dexterity</dt>
        <dd className={styles['monster__stat-value']}>{dexterity}</dd>
        <dt className={styles['monster__stat']}>Constitution</dt>
        <dd className={styles['monster__stat-value']}>{constitution}</dd>
        <dt className={styles['monster__stat']}>Intelligence</dt>
        <dd className={styles['monster__stat-value']}>{intelligence}</dd>
        <dt className={styles['monster__stat']}>Wisdom</dt>
        <dd className={styles['monster__stat-value']}>{wisdom}</dd>
        <dt className={styles['monster__stat']}>Charisma</dt>
        <dd className={styles['monster__stat-value']}>{charisma}</dd>
      </dl>
      {image && (
        <div className={styles['monster__image']}>
          <Image
            src={`${baseUrl}${image}`}
            alt={name}
            width={400}
            height={400}
            style={{ borderRadius: '50px' }}
            priority
          />
        </div>
      )}
    </div>
  );
};
