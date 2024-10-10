import pool from "../db";
import { ClubModel } from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  try {
    const [rows] = await pool.execute('SELECT * FROM clubs');
    return rows as ClubModel[];
  } catch (err) {
    console.error('Erro ao buscar clubes:', err);
    throw err;
  }
};
