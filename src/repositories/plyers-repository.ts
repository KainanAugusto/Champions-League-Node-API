import pool from "../db";
import { PlayerModel } from "../models/player-model";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  try {
    const [rows] = await pool.execute('SELECT * FROM players');
    return rows as PlayerModel[];
  } catch (err) {
    console.error('Error fetching players:', err);
    throw err;
  }
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  try {
    const [rows] = await pool.execute('SELECT * FROM players WHERE id = ?', [id]);
    const players = rows as PlayerModel[];
    return players.length > 0 ? players[0] : undefined;
  } catch (err) {
    console.error('Error fetching player by ID:', err);
    throw err;
  }
};

export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
    const { name, position, nationality, team, age, goals, assists, rating } = player;
    try {
      const [result]: any = await pool.execute(
        'INSERT INTO players (name, position, nationality, team, age, goals, assists, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, position, nationality, team, age, goals, assists, rating]
      );
      return { ...player, id: result.insertId };
    } catch (err) {
      console.error('Error inserting player:', err);
      throw err;
    }
  };
  

export const deletePlayer = async (id: number): Promise<PlayerModel | undefined> => {
  try {
    const [result]: any = await pool.execute('DELETE FROM players WHERE id = ?', [id]);
    if (result.affectedRows > 0) {
      return { id } as PlayerModel;
    }
    return undefined;
  } catch (err) {
    console.error('Error inserting player:', err);
    throw err;
  }
};

export const findAndModifyPlayer = async (id: number, player: PlayerModel): Promise<PlayerModel | undefined> => {
    const { name, position, nationality, team, age, goals, assists, rating } = player;
  
    try {
      // Primeiro, buscar o jogador existente no banco de dados
      const existingPlayer = await findPlayerById(id);
      if (!existingPlayer) {
        throw new Error(`Player with id ${id} not found`);
      }
  
      // Se os campos não forem fornecidos na requisição, mantenha os valores atuais
      const updatedName = name || existingPlayer.name;
      const updatedPosition = position || existingPlayer.position;
      const updatedNationality = nationality || existingPlayer.nationality;
      const updatedTeam = team || existingPlayer.team;
      const updatedAge = age !== undefined ? age : existingPlayer.age;
      const updatedGoals = goals !== undefined ? goals : existingPlayer.goals;
      const updatedAssists = assists !== undefined ? assists : existingPlayer.assists;
      const updatedRating = rating !== undefined ? rating : existingPlayer.rating;
  
      // Executar a consulta de atualização
      const [result]: any = await pool.execute(
        'UPDATE players SET name = ?, position = ?, nationality = ?, team = ?, age = ?, goals = ?, assists = ?, rating = ? WHERE id = ?',
        [updatedName, updatedPosition, updatedNationality, updatedTeam, updatedAge, updatedGoals, updatedAssists, updatedRating, id]
      );
  
      if (result.affectedRows > 0) {
        return { id, name: updatedName, position: updatedPosition, nationality: updatedNationality, team: updatedTeam, age: updatedAge, goals: updatedGoals, assists: updatedAssists, rating: updatedRating };
      }
  
      return undefined;
    } catch (err) {
      console.error('Error updating player:', err);
      throw err;
    }
  };
  
  
