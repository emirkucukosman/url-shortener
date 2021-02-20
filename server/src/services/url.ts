import URL from '../models/URL'

export const findOne = async (shortURL: string) => await URL.findOne({ shortURL });

export const findOneByBaseURL = async (baseURL: string) => await URL.findOne({ baseURL });

export const create = async (baseURL: string, shortURL: string) => await URL.create({ baseURL, shortURL })