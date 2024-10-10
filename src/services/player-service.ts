import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/plyers-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    return data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    return data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
};

export const createPlayerService = async (player: PlayerModel) => {
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        return await HttpResponse.created();
    }
    return await HttpResponse.badRequest(new Error('Player not found'));
};

export const deletePlayerService = async (id: number) => {
    const data = await PlayerRepository.deletePlayer(id);
    return data 
        ? await HttpResponse.ok({ "message": "Player deleted successfully" }) 
        : await HttpResponse.badRequest(new Error('Player not found'));
};

export const updatePlayerService = async (id: number, player: PlayerModel) => {
    const existingPlayer = await PlayerRepository.findPlayerById(id);
    
    if (existingPlayer) {
        await PlayerRepository.findAndModifyPlayer(id, player);
        return await HttpResponse.ok({ "message": "Player updated successfully" });
    } 
    
    if (Object.keys(player).length === 0) {
        return await HttpResponse.badRequest(new Error('Player not found'));
    }
    
    return await HttpResponse.noContent();
};

