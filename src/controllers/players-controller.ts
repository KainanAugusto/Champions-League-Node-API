import { Request, Response } from 'express';
import * as Service from '../services/player-service';
import { noContent } from '../utils/http-helper';
import { PlayerModel } from '../models/player-model';

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await Service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await Service.getPlayerByIdService(+id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const body = req.body;
    const httpResponse = await Service.createPlayerService(body);
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        let response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await Service.deletePlayerService(+id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body: PlayerModel = req.body;
    const httpResponse = await Service.updatePlayerService(+id, body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}