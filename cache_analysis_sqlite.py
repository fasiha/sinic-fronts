import sqlite3
from typing import Optional


def init(fname):
  con = sqlite3.connect(fname)
  cur = con.cursor()

  # Create table
  cur.execute('''CREATE TABLE IF NOT EXISTS cache
                (key text unique, val text)''')
  cur.execute('PRAGMA journal_mode=WAL')
  con.commit()

  return con


def put(con: sqlite3.Connection, k: str, value: str):
  cur = con.cursor()
  cur.execute("insert into cache values (?, ?)", (k, value))
  con.commit()


def quietPut(con: sqlite3.Connection, k: str, value: str):
  cur = con.cursor()
  try:
    cur.execute("insert into cache values (?, ?)", (k, value))
    con.commit()
  except sqlite3.IntegrityError:
    pass


def get(con: sqlite3.Connection, k: str) -> Optional[str]:
  cur = con.cursor()
  cur.execute("select val from cache where key=?", (k,))
  res = cur.fetchone()
  return res[0] if res else res  # else None
