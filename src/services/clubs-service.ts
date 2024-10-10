import * as HttpResponse from '../utils/http-helper';
import * as ClubRepository from '../repositories/clubs-repository';

export const getClubService = async () => {
    const data = await ClubRepository.findAllClubs();
    return data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
};
