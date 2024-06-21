'use-client';

import { Monster } from '@/components/monster/monster';
import LimitedWidthLayout from '@/components/layout/limited-layout';
import styles from './page.module.css';
import { MonsterInfo } from '@/types/monsters.interface';
import Link from 'next/link';
import { baseUrlMonsters } from '@/constants';

async function getMonsterByIndex(index: string): Promise<MonsterInfo> {
  const res = await fetch(`${baseUrlMonsters}/${index}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch monster');
  }

  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { index: string } }) {
  const { index } = params;

  const monsterInfo = await getMonsterByIndex(index);

  return (
    <LimitedWidthLayout>
      <Monster monster={monsterInfo} />
      <div className={styles['back__to__search']}>
        <Link href="/">Back To Search</Link>
      </div>
    </LimitedWidthLayout>
  );
}
