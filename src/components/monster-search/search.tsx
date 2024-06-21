'use client';
import { useState } from 'react';
import { MonsterList, MonsterSummary } from '@/types/monsters.interface';

import styles from './monster-search.module.css';
import Link from 'next/link';
import LimitedWidthLayout from '@/components/layout/limited-layout';
import { baseUrlMonsters } from '@/constants';

async function getMonsters(query: string): Promise<MonsterList> {
  const res = await fetch(`${baseUrlMonsters}?name=${query}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch monster data');
  }

  const data = await res.json();
  return data;
}

export const Search = () => {
  const [monstersCount, setMonstersCount] = useState<number | null>(null);
  const [monsters, setMonsters] = useState<Array<MonsterSummary>>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await getMonsters(searchQuery);
    setMonsters(result.results);
    setMonstersCount(result.count);
  };

  return (
    <LimitedWidthLayout>
      <form className={styles['search']} onSubmit={handleSearch}>
        <label className={styles['search__label']}>Search</label>
        <input
          className={styles['search__input']}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setMonstersCount(null);
          }}
        />
        <button className={styles['search__submit']} type={'submit'}>
          Search
        </button>
      </form>

      {!searchQuery && monsters.length === 0 && (
        <div className={styles['info']}>
          Enter A Dragons Name or Hit Search To See Them All!
        </div>
      )}
      {searchQuery && monstersCount === 0 && (
        <div className={styles['info']}>No Results</div>
      )}

      <ul className={styles['results']}>
        {monsters.map((monster) => (
          <li className={styles['results__item']} key={monster.index}>
            <Link href={`/monster/${monster.index}`}>{monster.name}</Link>
          </li>
        ))}
      </ul>
    </LimitedWidthLayout>
  );
};
